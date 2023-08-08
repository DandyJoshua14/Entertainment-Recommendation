import * as server from '../entries/pages/movie/_name_/_page.server.js';

export const index = 5;
export const component = async () => (await import('../entries/pages/movie/_name_/_page.svelte.js')).default;
export const file = '_app/immutable/entry/movie-_name_-page.svelte.c5d90796.js';
export { server };
export const server_id = "src/routes/movie/[name]/+page.server.js";
export const imports = ["_app/immutable/entry/movie-_name_-page.svelte.c5d90796.js","_app/immutable/chunks/index.52fc2b4f.js","_app/immutable/chunks/Home.6bf1ef56.js","_app/immutable/chunks/Nav.d6390f9b.js"];
export const stylesheets = ["_app/immutable/assets/_page.bf32d6b8.css","_app/immutable/assets/_page.7ac8291d.css","_app/immutable/assets/Nav.60614438.css"];
export const fonts = [];
