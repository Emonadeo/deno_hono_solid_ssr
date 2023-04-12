import { Component } from 'solid-js';
import { HydrationScript } from 'solid-js/web';
import { Counter } from './Counter.tsx';

export const App: Component = function () {
	return (
		<html>
			<head>
				<title>Solid SSR</title>
				<meta charset='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<HydrationScript />
			</head>
			<body>
				<Counter />
			</body>
			<script src='/entry_client.js' type='module' async></script>
		</html>
	);
};
