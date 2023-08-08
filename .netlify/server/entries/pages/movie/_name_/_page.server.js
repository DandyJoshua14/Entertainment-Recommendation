import * as dotenv from "dotenv";
dotenv.config();
let response;
let movie_data;
async function load({ params }) {
  let res = await fetch(`https://api.themoviedb.org/3/search/keyword?api_key=${process.env.API_KEY}&query=${params.name}`);
  let movies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${params.name}&page=1&include_adult=false`);
  response = await res.json();
  movie_data = await movies.json();
  return {
    movies: movie_data,
    respond: JSON.parse(JSON.stringify(response))
  };
}
export {
  load
};
