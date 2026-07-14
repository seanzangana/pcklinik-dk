// Site-wide announcement banner — single toggle, no rebuild logic needed.
//
// HOW TO USE: just ask Cowork in plain language, e.g.
//   "Turn on the closed banner: we're closed today, back Tuesday the 15th."
//   "Turn off the announcement banner"
// Cowork edits `enabled` and `message` below and pushes — live in under a
// minute via the existing GitHub → Cloudflare Pages pipeline.
//
// When enabled is false, the banner component renders nothing at all
// (zero visual footprint, zero performance cost) — see banner() in build.mjs.
export const announcement = {
  enabled: false,
  message: 'Vi holder lukket i dag. Vi er tilbage mandag den 15. juli.',
  // type controls the banner color: "closed" (amber/orange), "info" (blue),
  // "holiday" (amber/orange, same as closed). Add more types + colors in
  // the .announcement-bar CSS rules in src/styles/global.css if needed.
  type: 'closed',
};
