// eslint-disable-next-line no-undef
module.exports = {
	globals: {
		'ts-jest': {
			tsConfig: 'tsconfig.test.json',
			babelConfig: {},
		},
	},
	roots: ['<rootDir>/src'],
	transform: {
		'^.+\\.ts?$': 'ts-jest',
		'^.+\\.tsx?$': 'ts-jest',
		'^.+\\.jsx?$': 'ts-jest',
		'^.+\\.js?$': 'ts-jest',
	},
	moduleNameMapper: {},
	testRegex: '\\.test\\.(ts|tsx)?$',
	setupFiles: [],
	setupFilesAfterEnv: [],
	collectCoverage: true,
	collectCoverageFrom: ['**/*.{ts,tsx}', '!src/index.tsx', '!src/pages/**', '!src/components/**'],
	coverageDirectory: 'coverage',
	moduleDirectories: ['node_modules', 'src'],
	coverageThreshold: {
		global: {
			branches: 70,
			functions: 70,
			lines: 70,
			statements: 70,
		},
	},
};
