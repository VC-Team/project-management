import StorybookReactRouter from '../src/helpers/storybook-router';

localStorage.removeItem('storybook-layout');

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: {
      smallmobile: {
        name: 'Mobile',
        styles: {
          width: '375px',
          height: '576px',
        },
      },
      tablet: {
        name: 'Tablet',
        styles: {
          width: '577px',
          height: '1199px',
        },
      },
    },
  },
	html: {
    prettier: {
			tabWidth: 2,
      singleQuote: true,
      bracketSpacing: true,
      htmlWhitespaceSensitivity: 'ignore',
    },
  },
};

export const decorators = [
  StorybookReactRouter,
]
