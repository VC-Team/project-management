const path = require('path');

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@whitespace/storybook-addon-html'],
	webpackFinal: config => {
		config.resolve.modules.push(path.resolve(__dirname, '../src'));
		config.resolve.alias = {
			...config.resolve.alias,
			'@atoms': path.resolve(__dirname, '../src/components/atoms/'),
			'@molecules': path.resolve(__dirname, '../src/components/molecules/'),
			'@organisms': path.resolve(__dirname, '../src/components/organisms/'),
			'@pages': path.resolve(__dirname, '../src/components/pages/'),
			'@templates': path.resolve(__dirname, '../src/components/templates/'),
			'@utils': path.resolve(__dirname, '../src/components/utils/'),
		};
		config.module.rules.push({
			test: /\.scss$/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader',
				{
					loader: require.resolve('sass-resources-loader'),
					options: {
						resources: [
							path.resolve(__dirname, '..', 'src', 'assets', 'scss', '_variables.scss'),
							path.resolve(__dirname, '..', 'src', 'assets', 'scss', '_mixins.scss'),
							path.resolve(__dirname, '..', 'src', 'assets', 'scss', '_zIndex.scss'),
							path.resolve(__dirname, '..', 'src', 'assets', 'scss', '_fonts.scss'),
							path.resolve(__dirname, '..', 'src', 'assets', 'scss', '_functions.scss'),
							path.resolve(__dirname, '..', 'src', 'assets', 'scss', '_globals.scss'),
						],
					},
				},
			],
			include: path.resolve(__dirname, '..', '/'),
		});
		config.resolve.extensions.push('.ts', '.tsx');
		return config;
	},
};
