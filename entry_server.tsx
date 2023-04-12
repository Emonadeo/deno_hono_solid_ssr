import { serve } from 'https://deno.land/std@0.183.0/http/server.ts';
import { Hono } from 'https://deno.land/x/hono@v3.1.5/mod.ts';
import { serveStatic } from 'https://deno.land/x/hono@v3.1.5/middleware.ts';

import { renderToStringAsync } from 'solid-js/web';

const app = new Hono();

import { App } from './src/App.tsx';

app.get('/', async function (c) {
	const html = await renderToStringAsync(() => <App />);
	return c.html(html);
});

app.use('*', serveStatic({ root: './public' }));

serve(app.fetch);
