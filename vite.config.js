import { sveltekit } from '@sveltejs/kit/vite';
import UnoCSS from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		UnoCSS({
			presets: [presetIcons()]
		}),
		sveltekit(),
	]
};

export default config;