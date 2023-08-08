import * as dotenv from "dotenv";
dotenv.config();
let response;
let vid;
async function load({ params }) {
  let res = await fetch(`https://api.themoviedb.org/3/movie/${params.trailer_id}?api_key=${process.env.API_KEY}&video=true&language=en-US`);
  let videos = await fetch(`https://api.themoviedb.org/3/movie/${params.trailer_id}/videos?api_key=${process.env.API_KEY}&language=en-US`);
  response = await res.json();
  vid = await videos.json();
  return {
    videos: JSON.parse(JSON.stringify(vid)),
    respond: JSON.parse(JSON.stringify(response))
  };
}
export {
  load
};
