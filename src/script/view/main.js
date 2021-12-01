import '../components/search-section.js';
import '../components/movie-list.js';
import axios from 'axios';
import { setListMovies, getListMovies } from '../data/movies.js';

const BASE_URL = 'https://ghibliapi.herokuapp.com'

function main() {
    const searchSection = document.querySelector('search-section');
    const movieList = document.querySelector('movie-list');

    async function retrieveDataFromApi() {
        try {
            const response = await axios.get(`${BASE_URL}/films`);
            setListMovies(response.data);
        } catch (error) {
            movieList.renderError(
                'Cant Get Data from API',
                'Totoro cant get the data. Make sure you have internet connection'
            );
        }
    }

    function getMovie(keyword) {
        const movie = getListMovies().filter(movie =>
            movie.title.toUpperCase().includes(keyword.toUpperCase()));
        if (movie.length) {
            movieList.movie = movie;
        } else {
            movieList.renderError(
                'Movies not Found',
                'Totoro does not know that title. Make sure you enter the title correctly'
            );
        }
    }

    retrieveDataFromApi();

    searchSection.submitEvent = getMovie;
}

export default main;
