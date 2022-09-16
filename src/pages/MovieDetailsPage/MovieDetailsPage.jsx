import React from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
// import useFetchMoviesById from '../../hooks/useFetchMoviesById';
import apiMovies from 'api/movies';
// import Loader from '../../components/Loader/Loader';
import MovieDetails from '../../components/Movies/MovieDetails';
import { MovieDetailsSection } from './MovieDetailsPage.styled';
import MovieInfo from 'components/Movies/MovieInfo';

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const movie = apiMovies.getMoviesById(movieId);
    console.log(movie)

    const backLink =
        `${location.state?.from?.pathname}${location.state?.from?.search}` ??
        '/movies';

    const goBackHandler = e => {
        navigate(backLink, { replace: true });
    };

    return (
        <MovieDetailsSection>
            <button type="button" onClick={goBackHandler}>
                &larr; Go back
            </button>
            
                <>
                    <MovieDetails movie={movie} />
                    <MovieInfo />
                    <Outlet />
                </>
            
        </MovieDetailsSection>
    );
};

export default MovieDetailsPage;