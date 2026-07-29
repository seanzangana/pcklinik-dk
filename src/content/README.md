# Nyheder — adding blog posts

Posts live as Markdown files in `src/content/nyheder/`, one file per post.
The build (`node build.mjs`) reads every `*.md` file in that folder, skips
drafts, converts Markdown to HTML, and generates:

- `/nyheder/` — the index, newest post first
- `/nyheder/<slug>/` — one page per post, with `BlogPosting` schema

The **filename (without `.md`) is the URL slug** — do not rename an existing
file, or its URL changes.

## Adding a new post

1. Create `src/content/nyheder/din-slug-her.md`. Use a URL-friendly slug:
   lowercase, hyphens, no æøå (e.g. write `saadan` not `sådan`).
2. Start the file with frontmatter, then the post body in Markdown below the
   closing `---`:

   ```markdown
   ---
   title: "Din overskrift her"
   date: 2026-08-01
   category: Guides
   description: "Én-to sætninger til kortet på /nyheder/ og til meta description/SEO."
   ---
   Første afsnit af din artikel...

   ## En underoverskrift

   Mere tekst. Du kan bruge **fed**, *kursiv*, `kode`, [links](/kontakt/),
   punktlister og nummererede lister.
   ```

3. Run `node build.mjs` (or just `git push` — Cloudflare Pages runs the same
   build) and the post appears at `/nyheder/din-slug-her/`.

That's it — no CMS, no database, no build step beyond the one the site
already uses.

## Frontmatter fields

| Field | Required | Notes |
|---|---|---|
| `title` | yes | Page `<h1>` and `<title>`. Quote it if it contains a colon. |
| `date` | yes | `YYYY-MM-DD`. Controls sort order (newest first) and the displayed date. |
| `category` | yes | Shown as the eyebrow label on the card and post (e.g. `Guides`). |
| `description` | yes | Card summary, `<meta description>`, and schema description. Keep it to 1–2 sentences. |
| `draft` | no | Set `draft: true` to write the post but exclude it from the build entirely (no page, not in the index, not in the sitemap). Omit or leave `false` to publish. |
| `image` | no | Path or URL to an image. Currently only used for the `BlogPosting` schema's `image` field (SEO/rich results) — it is not yet rendered visually in the post body. A relative path (`/images/nyheder/foo.jpg`) is resolved against `https://www.pcklinik.dk`. |

Values with a colon, or that could be misread as YAML types (`yes`, `no`,
numbers), should be wrapped in quotes — `title: "Sådan: en guide"`.

## Markdown support

The converter is a small hand-written subset (no external dependency —
`src/content/posts.mjs`), matching what the site's own build script already
does (zero-dependency, single `node build.mjs`). Supported:

- Paragraphs (blank line between them)
- `##` and `###` headings (`#` is also accepted and treated as `##` — `<h1>`
  is reserved for the post title)
- `**bold**`, `*italic*`, `` `inline code` ``
- `[link text](/some/path/)`
- `- ` or `* ` bullet lists, `1. ` numbered lists
- `> ` blockquotes

Not supported: tables, nested lists, images inside the body, footnotes. If a
post needs one of these, either write the small amount of raw HTML inline
(the converter passes unrecognized paragraph text through, but raw HTML
blocks aren't specifically handled — check the rendered output) or extend
`markdownToHtml()` in `src/content/posts.mjs`. If the site's Markdown needs
grow a lot, swap that function for a real parser (e.g. `marked`) — nothing
else has to change, since `loadNewsPosts()`'s return shape is the only
contract `build.mjs` relies on.

## Build-time validation

If a non-draft post is missing `title`, `date`, `category`, or
`description`, or `date` isn't `YYYY-MM-DD`, the build fails loudly with the
filename and the missing field(s) — better than silently publishing a broken
page.

## Removing a post

Delete the `.md` file (or set `draft: true` to unpublish without deleting)
and rebuild/push. Its URL will 404 on the next deploy — if it had external
links or search rankings worth preserving, consider redirecting it instead
of deleting outright (ask before setting up a redirect; the site's redirect
map is currently disabled by design).

## Automating posts (e.g. from n8n)

Because posts are just Markdown files in a git repo, and the deploy pipeline
is already "build on push," publishing a post from an external tool is
just: write one `.md` file to `src/content/nyheder/` and commit it to
`master`. A few ways to do that from n8n specifically:

- **GitHub API (recommended, no local git needed):** use n8n's GitHub node
  (or a raw HTTP Request node) against
  `PUT /repos/seanzangana/pcklinik-dk/contents/src/content/nyheder/<slug>.md`.
  That endpoint creates or updates a file and commits it directly to a
  branch (default `master`) in one call — no clone, no working directory.
  It needs the file content base64-encoded, a commit message, and a
  personal access token (fine-grained, scoped to just this repo, with
  Contents: Read and write) stored as an n8n credential.
  - Build the Markdown string (frontmatter + body) in an n8n Function/Code
    node from whatever generated the post content, generate a slug (e.g.
    from the title — lowercase, hyphenate, strip æøå/punctuation), then
    call the API with that path and content.
  - Cloudflare Pages is already watching `master` for pushes, so the commit
    alone triggers a new build and deploy — no separate deploy step needed.
- Keep title/date/category/description validation in mind: if n8n generates
  a post automatically, make sure it always sets those four fields, or the
  build will fail (see above) and nothing will deploy until it's fixed —
  that's a deliberate safety net, not a bug, but it's worth having n8n
  double-check its own output before committing.
- If you want a review step before publishing, have n8n commit with
  `draft: true` set, then flip it to `false` (or delete that line) in a
  follow-up commit once someone's approved it — a second small GitHub API
  call to the same endpoint, same idea.
