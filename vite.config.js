import { sveltekit } from '@sveltejs/kit/vite';
import UnoCSS from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		UnoCSS({
			presets: [presetIcons()]
		})
	]
};

export default config;
