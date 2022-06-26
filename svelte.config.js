import adapter from '@sveltejs/adapter-netlify';
import packageVersion from 'vite-plugin-package-version';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    vite: {
      plugins: [
        packageVersion.default(),
      ],
    },
  },
};

export default config;
