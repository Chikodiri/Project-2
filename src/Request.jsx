const key = import.meta.env.VITE_MOVIE_API_KEY;
const base_uri = "https://api.themoviedb.org/3/";
const image_uri = "https://image.tmdb.org/t/p/";

const requests = {
    discovery: `${base_uri}discover/movie?api_key=${key}&append_to_response=video,image`,
    tvShows: `${base_uri}discover/tv?api_key=${key}&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`,
    popular: `${base_uri}discover/movie/popular?api_key=${key}&language=en-US&page=1`,
    top: `${base_uri}discover/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    nowPlaying: `${base_uri}discover/movie/top_rated?now_playing=${key}&language=en-US&page=1`,
    upcoming: `${base_uri}discover/movie/top_rated?upcoming=${key}&language=en-US&page=1`,
};

export { requests, base_uri, image_uri };
