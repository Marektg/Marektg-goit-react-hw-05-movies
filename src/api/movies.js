import axios from 'axios';
const apiKey = "6fabefdb44ed110e1291f5d3ba9d7ac8";

export const getTrendyMovies = async (periodOfTime) => {
    try {
        periodOfTime = "day";

        const response = await axios.get(
            `https://api.themoviedb.org/3/trending/movie/${periodOfTime}?api_key=${apiKey}`
        );
        return response.data.results;
    } catch (error) {
        console.log(error);
    };
};

export const getMoviesByQuery = async (query) => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=1&include_adult=false`
        );
        return response.data.results;
    } catch (error) {
        console.log(error);
    }
};

const apiMovies = {
    getTrendyMovies,
    getMoviesByQuery,
}

export default apiMovies;