import { resolve } from 'path';

import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [reactRefresh()],
	build: {
		sourcemap: process.env.NODE_ENV === 'production' ? false : true,
	},
	resolve: {
		alias: {
			'@atoms': resolve(__dirname, 'src/components/atoms'),
			'@molecules': resolve(__dirname, 'src/components/molecules'),
			'@organisms': resolve(__dirname, 'src/components/organisms'),
			'@pages': resolve(__dirname, 'src/components/pages'),
			'@templates': resolve(__dirname, 'src/components/templates'),
			'@utils': resolve(__dirname, 'src/components/utils'),
			helpers: resolve(__dirname, 'src/helpers'),
			store: resolve(__dirname, 'src/store'),
			services: resolve(__dirname, 'src/services'),
			pages: resolve(__dirname, 'src/pages'),
			assets: resolve(__dirname, 'src/assets'),
		},
	},
});
