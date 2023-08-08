import { c as create_ssr_component, a as subscribe, b as set_store_value, v as validate_component } from "../../chunks/index2.js";
import "../../chunks/Nav.js";
import { H as Home } from "../../chunks/Home.js";
import { P as Pagination } from "../../chunks/Pagination.js";
import { m as movies } from "../../chunks/store.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "html.svelte-fr3dzx{background-color:#444654;font-family:'Muli', sans-serif;background-repeat:no-repeat;color:whitesmoke;scroll-behavior:smooth}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $movies, $$unsubscribe_movies;
  $$unsubscribe_movies = subscribe(movies, (value2) => $movies = value2);
  let { data } = $$props;
  let value = data.movies.results;
  set_store_value(movies, $movies = value, $movies);
  let filtered = value;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_movies();
  return `${$$result.head += `<!-- HEAD_svelte-1anpopb_START -->${$$result.title = `<title>Home</title>`, ""}<!-- HEAD_svelte-1anpopb_END -->`, ""}

<html lang="${"en"}" class="${"svelte-fr3dzx"}">${validate_component(Home, "Home").$$render($$result, { values: filtered }, {}, {})}
	${validate_component(Pagination, "Pagination").$$render($$result, { pagenum: 1 }, {}, {})}
</html>`;
});
export {
  Page as default
};
