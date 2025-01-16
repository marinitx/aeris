import { defineConfig } from 'astro/config';

export default defineConfig({
  base: '/aeris/', // Cambia esto por el nombre de tu repositorio
  build: {
    assetsInlineLimit: 0,
  },
});
