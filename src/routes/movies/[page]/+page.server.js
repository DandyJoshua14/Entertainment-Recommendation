import * as dotenv from 'dotenv'

dotenv.config();
let response;
// @ts-ignore
export async function load({ params }) {
    let res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&include_video=true&sort_by=popularity.desc&page=${params.page}`)
    response = await res.json()
    return {
      numOfPage: params.page,
      respond: JSON.parse(JSON.stringify(response))
    }
  }