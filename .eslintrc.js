module.exports = {
	env: {
		browser: true,
		es6: true,
		jest: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		sourceType: 'module',
	},
	plugins: ['prettier', '@typescript-eslint', 'eslint-plugin-unused-imports'],
	extends: [
		'airbnb',
		'airbnb-typescript',
		'airbnb/hooks',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
	],
	settings: {
		react: {
			version: 'detect',
		},
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
				project: './tsconfig.json',
			},
		},
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				'no-undef': 'off',
			},
		},
	],
	rules: {
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
		'no-param-reassign': ['error', { props: false }],
		'react/function-component-definition': [
			2,
			{ namedComponents: ['arrow-function', 'function-declaration'] },
		],
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	},
	ignorePatterns: ['build/**', 'dist/**', 'node_modules/', '/*.js'],
};
