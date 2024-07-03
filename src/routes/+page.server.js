import * as dotenv from 'dotenv'


dotenv.config();
let response;
// let limit = 1;
export async function load({ cookies }) {
  cookies.set("page", "1")
  let page = cookies.get("page")
  let res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&sort_by=popularity.desc&video=true&page=${page}`)
  response = await res.json()
  console.log(response)
  return {
    numOfPage: 1,
    movies: JSON.parse(JSON.stringify(response))
  }
}