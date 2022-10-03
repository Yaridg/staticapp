// import adapter from '@sveltejs/adapter-auto';
//import adapter from 'svelte-adapter-azure-swa';
//import adapter from '@sveltejs/adapter-node';
import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
		  postcss: true,
		}),
	],

	kit: {
		adapter: adapter(),
	}
};

export default config;
