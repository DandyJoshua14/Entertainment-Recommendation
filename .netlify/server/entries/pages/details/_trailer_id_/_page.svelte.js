import { c as create_ssr_component, e as escape, v as validate_component, f as add_attribute, h as each } from "../../../../chunks/index2.js";
import { C as Container, N as Nav } from "../../../../chunks/Nav.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "html.svelte-fr3dzx{background-color:#444654;font-family:'Muli', sans-serif;background-repeat:no-repeat;color:whitesmoke;scroll-behavior:smooth}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let infos = data.respond;
  let videos = data.videos.results;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-15lmyr6_START -->${$$result.title = `<title>Details - ${escape(infos.original_title)}</title>`, ""}<!-- HEAD_svelte-15lmyr6_END -->`, ""}
<html lang="${"en"}" class="${"h-fit svelte-fr3dzx"}"><main class="${"bg container m-auto overflow-auto"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
			<div class="${"flex text-center"}"><div>${infos.poster_path ? `<img${add_attribute("src", `https://image.tmdb.org/t/p/w500/${infos.poster_path}`, 0)} class="${"mx-auto h-fit w-fit items-center rounded-3xl p-4"}" alt="${"Movie Poster"}">` : `<img src="${"/default_poster.png"}" class="${"mx-auto h-fit w-[500px] items-center rounded-3xl p-4"}" alt="${"Movie Poster"}">`}</div>
				<div class="${"h-fit w-fit text-center"}"><h3 class="${"p-12 text-center text-2xl font-extrabold underline"}">${escape(infos.title)}</h3>
					<p class="${"text-center font-comforta text-lg"}">${escape(infos.overview)}</p>
					<div class="${"mt-7 flex text-center font-bold"}"><p class="${"p-2"}">Genres: </p>
						${each(infos.genres, (genre) => {
        return `<a${add_attribute("href", `https://www.google.com/search?q=${genre.name}`, 0)} target="${"about:_blank"}"><p class="${"h-fit w-fit rounded-lg border p-2"}">${escape(genre.name)}
								</p></a>
							 `;
      })}</div>
					<i class="${"mt-7 flex p-2 text-left"}">Popularity: ${escape(infos.popularity)}</i>
					<i class="${"mt-7 flex p-2 text-left"}">Original Language: ${escape(infos.original_language === "en" ? "English" : infos.original_language)}</i>
					${infos.first_air_date ? `<i class="${"mt-7 flex p-2 text-left"}">First Air Date: ${escape(infos.first_air_date)}</i>` : ``}
					${infos.release_date ? `<i class="${"mt-7 flex p-2 text-left"}">Release Date: ${escape(infos.release_date)}</i>` : ``}
					${infos.production_companies ? `<div class="${"mt-7 flex gap-9 p-2"}">${each(infos.production_companies, (pdc) => {
        return `${pdc.logo_path ? `<img${add_attribute("src", `https://image.tmdb.org/t/p/w500/${pdc.logo_path}`, 0)} alt="${""}" class="${"flex h-[100px] w-[100px]"}">` : `${escape(pdc.name)}`}`;
      })}</div>` : ``}</div></div>
			${videos != "" || null || void 0 || [] ? `<h3 class="${"p-12 text-center text-2xl font-extrabold underline"}">Official Trailer and related videos
				</h3>
				<div class="${"ml-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"}">${each(videos, (video) => {
        return `<iframe width="${"500"}" height="${"315"}"${add_attribute("src", `https://www.youtube.com/embed/${video.key}`, 0)} title="${"YouTube video player"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}" allowfullscreen></iframe>`;
      })}</div>` : ``}
			<br>
			<br>
			<br>
			<br>
			<br>
			<br>
			<br>
			<br>`;
    }
  })}</main>
</html>`;
});
export {
  Page as default
};
