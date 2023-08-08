import * as dotenv from "dotenv";
import { p as pageNumber } from "../../chunks/store.js";
dotenv.config();
let response;
async function load() {
  let res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&sort_by=popularity.desc&video=true&page=${pageNumber}`);
  response = await res.json();
  return {
    numOfPage: 1,
    movies: JSON.parse(JSON.stringify(response))
  };
}
export {
  load
};
