/* eslint-disable */
import adapter from '@sveltejs/adapter-netlify';
import sveltePreproces from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [sveltePreproces()],
  kit: {
    adapter: adapter({
      edge: false,
      split: false
    })
  }
};

export default config;