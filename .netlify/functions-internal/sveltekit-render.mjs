import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["default_poster.png","favicon.png","logo.jpeg","tmdb.svg"]),
	mimeTypes: {".png":"image/png",".jpeg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.51dae6bd.js","imports":["_app/immutable/entry/start.51dae6bd.js","_app/immutable/chunks/index.52fc2b4f.js","_app/immutable/chunks/singletons.f7252e5a.js","_app/immutable/chunks/index.5d032e7c.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.34264cf6.js","imports":["_app/immutable/entry/app.34264cf6.js","_app/immutable/chunks/index.52fc2b4f.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js'),
			() => import('../server/nodes/6.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/component",
				pattern: /^\/component\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/details/[trailer_id]",
				pattern: /^\/details\/([^/]+?)\/?$/,
				params: [{"name":"trailer_id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/movies/[page]",
				pattern: /^\/movies\/([^/]+?)\/?$/,
				params: [{"name":"page","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/movie/[name]",
				pattern: /^\/movie\/([^/]+?)\/?$/,
				params: [{"name":"name","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
