import axios from "axios";

const API_KEY_TMDB = "210d6a5dd3f16419ce349c9f1b200d6d";
const ROOT_API_TMDB = "https://api.themoviedb.org/3/";

// export const searchMovie = async (criteria) => {
//   return await axios.get(
//     `${ROOT_API_TMDB}search/movie?query=${criteria}&include_adult=false&language=en-US&page=1&api_key=${API_KEY_TMDB}`
//   );
// };

export const latestMovie = async () => {
  return await axios.get(
    `${ROOT_API_TMDB}trending/movie/day?language=en-US&page=1&api_key=${API_KEY_TMDB}`
  );
};
