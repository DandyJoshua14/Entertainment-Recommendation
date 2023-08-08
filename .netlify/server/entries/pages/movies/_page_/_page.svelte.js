import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index2.js";
import { H as Home } from "../../../../chunks/Home.js";
import { P as Pagination } from "../../../../chunks/Pagination.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-gp1bh5{background-color:#444654;font-family:'Muli', sans-serif;background-repeat:no-repeat;color:whitesmoke;scroll-behavior:smooth}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let page = parseInt(data.numOfPage);
  let value = data.respond.results;
  let filtered = value;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1anpopb_START -->${$$result.title = `<title>Home</title>`, ""}<!-- HEAD_svelte-1anpopb_END -->`, ""}
<main class="${"svelte-gp1bh5"}">${validate_component(Home, "Home").$$render($$result, { values: filtered }, {}, {})}
	${validate_component(Pagination, "Pagination").$$render($$result, { pagenum: page }, {}, {})}
</main>`;
});
export {
  Page as default
};
