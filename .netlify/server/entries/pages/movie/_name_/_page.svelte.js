import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../chunks/index2.js";
import { H as Home } from "../../../../chunks/Home.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "body.svelte-laz3sa{background-color:#f8f8f8;font-family:Arial, sans-serif;text-align:center}.container.svelte-laz3sa{margin:0 auto;max-width:600px;padding:20px}h1.svelte-laz3sa{font-size:4rem;margin-bottom:0}p.svelte-laz3sa{font-size:1.5rem;margin-top:0}.error-code.svelte-laz3sa{font-size:10rem;margin-top:2rem;color:#ff7f50;animation:svelte-laz3sa-shake 0.5s ease-in-out infinite}@keyframes svelte-laz3sa-shake{0%{transform:translateX(0)}25%{transform:translateX(-20px)}50%{transform:translateX(20px)}75%{transform:translateX(-10px)}100%{transform:translateX(0)}}.btn.svelte-laz3sa{display:inline-block;background-color:#ff7f50;color:#fff;padding:10px 20px;border-radius:5px;text-decoration:none;margin-top:2rem;font-size:1.5rem;transition:background-color 0.3s ease-in-out}.btn.svelte-laz3sa:hover{background-color:#e65c00}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let response = data.respond.results;
  let movies = data.movies.results;
  let results = [...movies, ...response];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1kvfeig_START -->${$$result.title = `<title>${escape(response || movies ? "Search" : "404 - Page Not Found")}</title>`, ""}<!-- HEAD_svelte-1kvfeig_END -->`, ""}
<body class="${"svelte-laz3sa"}">${results ? `${validate_component(Home, "Home").$$render($$result, { values: results }, {}, {})}` : `<div class="${"container svelte-laz3sa"}"><h1 class="${"svelte-laz3sa"}">404</h1>
			<p class="${"svelte-laz3sa"}">Oops! The page you&#39;re looking for cannot be found.</p>
			<div class="${"error-code svelte-laz3sa"}">404</div>
			<a href="${"/"}" class="${"btn svelte-laz3sa"}">Go Back Home</a></div>`}
</body>`;
});
export {
  Page as default
};
