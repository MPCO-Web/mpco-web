module.exports = {
	env: {
		browser: true,
		es6: true,
		jest: true,
	},
	extends: [
		'airbnb',
		'airbnb-typescript',
		'airbnb/hooks',
		'prettier',
		'plugin:prettier/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
	],
	plugins: ['prettier', '@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y', 'import'],
	rules: {
		'prettier/prettier': ['error'],
		'no-param-reassign': ['error', { props: false }],
	},
};
