import { resolve } from 'path';

import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';

const pathSrc = resolve(__dirname, './src');

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
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: [
					'assets/scss/_variables',
					'assets/scss/_mixins',
					'assets/scss/_zIndex',
					'assets/scss/_fonts',
					'assets/scss/_functions',
					'assets/scss/_globals',
				]
					.map(stylePathFile => `@import "${pathSrc}/${stylePathFile}";`)
					.join('\n'),
			},
		},
	},
});
