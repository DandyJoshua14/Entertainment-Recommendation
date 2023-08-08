import { w as writable } from "./index.js";
function createLocalStorageStore(key, initialValue) {
}
const movies = writable([]);
const pageNumber = createLocalStorageStore();
export {
  movies as m,
  pageNumber as p
};
