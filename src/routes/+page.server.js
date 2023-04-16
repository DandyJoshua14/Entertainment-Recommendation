import * as dotenv from 'dotenv'
import { pageNumber } from '../store';

dotenv.config();
let response;
// let limit = 1;
export async function load() {
    let res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&sort_by=popularity.desc&video=true&page=${pageNumber}`)
    response = await res.json()
    return {
      numOfPage: 1,
      movies: JSON.parse(JSON.stringify(response))
    }
  }