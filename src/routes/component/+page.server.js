let search;
let apiResponse;
export const actions = {
    // @ts-ignore
    search: async ({ request }) => {
        const data = await request.formData();
        search = data.get("search");
        let result = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${process.env.API_KEY}&language=en-US&page=1&include_adult=false`)
        apiResponse = await result.json()
        return {
          res: apiResponse,
          message: 'Form Submitted',
          success: true
        }
    }
}