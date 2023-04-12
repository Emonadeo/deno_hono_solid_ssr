import { Component, createSignal } from 'solid-js';

export const Counter: Component = function () {
	const [count, setCount] = createSignal(0);

	return (
		<div>
			<p>{count()}</p>
			<button onClick={() => setCount(count() + 1)}>Increment</button>
		</div>
	);
};
