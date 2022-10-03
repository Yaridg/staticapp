const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-61c2a4c6.js","imports":["_app/immutable/start-61c2a4c6.js","_app/immutable/chunks/index-bd0e4065.js","_app/immutable/chunks/singletons-0ce8c6f8.js","_app/immutable/chunks/index-9de28fd4.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-768d97e8.js'),
			() => import('./chunks/1-12d3ec0a.js'),
			() => import('./chunks/2-fe472963.js'),
			() => import('./chunks/3-71b7c363.js'),
			() => import('./chunks/4-a9ef4d90.js'),
			() => import('./chunks/5-da20a577.js'),
			() => import('./chunks/6-c77de9ff.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "inmates",
				pattern: /^\/inmates\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: () => import('./chunks/_server.ts-40eedbad.js')
			},
			{
				id: "reports",
				pattern: /^\/reports\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "admin/forms",
				pattern: /^\/admin\/forms\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: () => import('./chunks/_server.ts-163795d8.js')
			},
			{
				id: "admin/users",
				pattern: /^\/admin\/users\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: () => import('./chunks/_server.ts-830b68c2.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
