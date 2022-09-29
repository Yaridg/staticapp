const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-11bfd7ab.js","imports":["_app/immutable/start-11bfd7ab.js","_app/immutable/chunks/index-4f5b2732.js","_app/immutable/chunks/singletons-d3bcbd7f.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-953fc319.js'),
			() => import('./chunks/1-b94330b9.js'),
			() => import('./chunks/2-b427a01f.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
