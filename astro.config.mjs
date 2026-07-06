import { defineConfig } from 'astro/config';

// pcklinik.dk — Danish site (fork of pcklinik.eu codebase, Arabic removed).
export default defineConfig({
  site: 'https://www.pcklinik.dk',
  trailingSlash: 'always',
  build: {
    format: 'directory', // clean URLs: /lenovo-repair/ -> lenovo-repair/index.html
  },
});
