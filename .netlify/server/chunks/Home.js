import { c as create_ssr_component, v as validate_component, h as each, f as add_attribute, e as escape } from "./index2.js";
import { C as Container, N as Nav } from "./Nav.js";
const Home_svelte_svelte_type_style_lang = "";
const css = {
  code: "html.svelte-fr3dzx{background-color:#444654;font-family:'Muli', sans-serif;background-repeat:no-repeat;color:whitesmoke;scroll-behavior:smooth}",
  map: null
};
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { values } = $$props;
  if ($$props.values === void 0 && $$bindings.values && values !== void 0)
    $$bindings.values(values);
  $$result.css.add(css);
  return `<html lang="${"en"}" class="${"svelte-fr3dzx"}"><main class="${"bg container m-auto overflow-auto"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
			<div class="${"h-fit items-center overflow-hidden py-[50px] text-center"}"><h1 class="${"text-center text-4xl font-bold"}">Movies</h1>
				<br>
				<div class="${"mx-auto grid grid-cols-1 items-center gap-x-64 overflow-hidden px-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:pr-32 xl:grid-cols-4"}">${each(values, (value) => {
        return `<a${add_attribute("href", `/details/${value.id}`, 0)} target="${"about:_blank"}"><div class="${"grids my-8 mr-11 w-fit cursor-pointer items-center justify-items-center bg-transparent p-[20px] text-center text-white transition duration-500 ease-in-out hover:scale-105"}">${value.poster_path ? `<img${add_attribute("src", `https://image.tmdb.org/t/p/w500/${value.poster_path}`, 0)} class="${"mx-auto h-full w-fit items-center rounded-3xl p-4"}" alt="${"Movie Poster"}">` : `<img src="${"/default_poster.png"}" class="${"mx-auto h-fit w-[500px] items-center rounded-3xl p-4"}" alt="${"Movie Poster"}">`}
								${value.title || value.original_title || value.name ? `<h3 class="${"w-64 break-words font-bold"}">${escape(value.title || value.original_title || value.name)}
									</h3>` : `<h3 class="${"w-64 break-words font-bold"}">Movie Title</h3>`}</div>
						</a>`;
      })}</div>
				<br>
				<br></div>`;
    }
  })}</main>
</html>`;
});
export {
  Home as H
};
