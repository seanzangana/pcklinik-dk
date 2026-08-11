// ============================================================================
// Markdown-backed content loader for the Nyheder (blog) section.
// Zero-dependency by design, matching build.mjs's own "no framework, no CMS"
// philosophy — this is a small, easily-auditable hand-rolled parser rather
// than an npm package, since the Markdown subset the site needs (headings,
// paragraphs, bold/italic, links, inline code, lists, blockquotes) is small
// and stable. If richer Markdown is ever needed (tables, nested lists,
// footnotes), swap markdownToHtml() below for a real parser (e.g. `marked`)
// — loadNewsPosts()'s return shape is what build.mjs depends on, so nothing
// else has to change.
//
// Posts live as *.md files in src/content/nyheder/, one file per post, with
// YAML-style frontmatter. See src/content/README.md for the authoring guide.
// ============================================================================
import { promises as fs } from 'node:fs';
import path from 'node:path';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// ---------- frontmatter ----------
// Deliberately minimal: flat `key: value` pairs between a pair of `---`
// lines. No nested objects/arrays, no multi-line strings — the five fields
// Nyheder posts need (title, date, category, description, draft, image)
// never require them. Values may optionally be wrapped in single or double
// quotes (recommended if the value contains a colon). `true`/`false` become
// real booleans; everything else stays a plain string — importantly this
// means `date: 2026-07-05` stays the string 'YYYY-MM-DD' that fmtDate() in
// build.mjs expects, rather than a real YAML parser's habit of silently
// upgrading unquoted dates to native Date objects.
export function parseFrontmatter(raw) {
  const normalized = raw.replace(/\r\n/g, '\n');
  const match = normalized.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: normalized };
  const [, fm, body] = match;
  const data = {};
  for (const line of fm.split('\n')) {
    if (!line.trim() || line.trim().startsWith('#')) continue;
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (val === 'true') val = true;
    else if (val === 'false') val = false;
    data[key] = val;
  }
  return { data, content: body };
}

// ---------- markdown -> HTML ----------
// Supports: ## / ### headings (# is treated as ## — h1 is reserved for the
// page title), paragraphs, **bold**, *italic*, `inline code`,
// [link text](url), - / * bullet lists, 1. numbered lists, > blockquotes.
function inlineMd(text) {
  let s = esc(text);
  s = s.replace(/`([^`]+)`/g, (_, code) => `<code>${code}</code>`);
  s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, t, u) => `<a href="${u}">${t}</a>`);
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  return s;
}

export function markdownToHtml(md) {
  const lines = md.replace(/\r\n/g, '\n').split('\n');
  const blocks = [];
  let i = 0;
  const isListItem = (l) => /^(-|\*)\s+/.test(l);
  const isOrderedItem = (l) => /^\d+\.\s+/.test(l);
  const isQuote = (l) => /^>\s?/.test(l);
  const isHeading = (l) => /^#{1,3}\s+/.test(l);

  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === '') { i++; continue; }

    if (/^###\s+/.test(line)) { blocks.push(`<h3>${inlineMd(line.replace(/^###\s+/, ''))}</h3>`); i++; continue; }
    if (/^##\s+/.test(line)) { blocks.push(`<h2>${inlineMd(line.replace(/^##\s+/, ''))}</h2>`); i++; continue; }
    if (/^#\s+/.test(line)) { blocks.push(`<h2>${inlineMd(line.replace(/^#\s+/, ''))}</h2>`); i++; continue; }

    if (isListItem(line)) {
      const items = [];
      while (i < lines.length && isListItem(lines[i])) {
        items.push(`<li>${inlineMd(lines[i].replace(/^(-|\*)\s+/, ''))}</li>`);
        i++;
      }
      blocks.push(`<ul>${items.join('')}</ul>`);
      continue;
    }

    if (isOrderedItem(line)) {
      const items = [];
      while (i < lines.length && isOrderedItem(lines[i])) {
        items.push(`<li>${inlineMd(lines[i].replace(/^\d+\.\s+/, ''))}</li>`);
        i++;
      }
      blocks.push(`<ol>${items.join('')}</ol>`);
      continue;
    }

    if (isQuote(line)) {
      const quoteLines = [];
      while (i < lines.length && isQuote(lines[i])) {
        quoteLines.push(lines[i].replace(/^>\s?/, ''));
        i++;
      }
      blocks.push(`<blockquote>${inlineMd(quoteLines.join(' '))}</blockquote>`);
      continue;
    }

    // paragraph: gather consecutive plain lines until a blank line or a
    // line that starts a different block type
    const paraLines = [];
    while (i < lines.length && lines[i].trim() !== '' && !isListItem(lines[i]) && !isOrderedItem(lines[i]) && !isQuote(lines[i]) && !isHeading(lines[i])) {
      paraLines.push(lines[i]);
      i++;
    }
    blocks.push(`<p>${inlineMd(paraLines.join(' '))}</p>`);
  }
  return blocks.join('\n');
}

// ---------- post loading ----------
const REQUIRED_FIELDS = ['title', 'date', 'category', 'description'];

// rootDir: the project root (build.mjs's __dirname). Reads every *.md file
// in src/content/nyheder/, skips drafts, validates required frontmatter,
// converts the body to HTML, and returns posts sorted newest-first — ready
// to drop straight into the same `news` shape build.mjs already renders.
export async function loadNewsPosts(rootDir) {
  const dir = path.join(rootDir, 'src/content/nyheder');
  let files;
  try {
    files = (await fs.readdir(dir)).filter((f) => f.endsWith('.md'));
  } catch (e) {
    if (e.code === 'ENOENT') return [];
    throw e;
  }

  const posts = [];
  for (const file of files) {
    const raw = await fs.readFile(path.join(dir, file), 'utf8');
    const { data, content } = parseFrontmatter(raw);
    const slug = file.replace(/\.md$/, '');

    if (data.draft === true) continue;

    const missing = REQUIRED_FIELDS.filter((f) => !data[f]);
    if (missing.length) {
      throw new Error(`src/content/nyheder/${file}: missing required frontmatter field(s): ${missing.join(', ')}`);
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(String(data.date))) {
      throw new Error(`src/content/nyheder/${file}: "date" must be in YYYY-MM-DD format, got "${data.date}"`);
    }

    posts.push({
      slug,
      title: String(data.title),
      date: String(data.date),
      category: String(data.category),
      description: String(data.description),
      image: data.image ? String(data.image) : null,
      body: markdownToHtml(content.trim()),
    });
  }

  posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  return posts;
}
