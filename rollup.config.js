import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import { defineConfig } from 'rollup';

const extensions = [
	'.js',
	'.cjs',
	'.mjs',
	'.ts',
	'.jsx',
	'.tsx',
	'.json',
	'.node',
];

export default [
	defineConfig({
		input: 'entry_server.tsx',
		output: {
			dir: 'dist',
			format: 'esm',
		},
		preserveEntrySignatures: false,
		external: [/^https:\/\//, /^npm:/],
		plugins: [
			nodeResolve({
				exportConditions: ['solid', 'node'],
				extensions,
			}),
			commonjs(),
			babel({
				extensions,
				babelHelpers: 'bundled',
				presets: [
					['babel-preset-solid', { generate: 'ssr', hydratable: true }],
					'@babel/preset-typescript',
				],
			}),
		],
	}),
	defineConfig({
		input: 'entry_client.tsx',
		output: {
			dir: 'dist/public',
			format: 'esm',
		},
		plugins: [
			nodeResolve({
				exportConditions: ['solid'],
				extensions,
			}),
			commonjs(),
			babel({
				extensions,
				babelHelpers: 'bundled',
				presets: [
					['babel-preset-solid', { generate: 'dom', hydratable: true }],
					'@babel/preset-typescript',
				],
			}),
		],
	}),
];
