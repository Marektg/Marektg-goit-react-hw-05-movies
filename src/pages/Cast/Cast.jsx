import React from 'react';
import { useParams } from 'react-router-dom';
import apiMovies from '../../api/movies'
// import useFetchMoviesById from '../../hooks/useFetchMoviesById';
import CastList from '../../components/Cast/CastList';
// import Loader from '../../components/Loader/Loader';

const Cast = () => {
    const { movieId } = useParams();
    const { movie } = apiMovies.getMoviesCast(movieId);

    const casts = movie.cast;

    return (
        <>
           
                <CastList casts={casts} />
            
        </>
    );
};

export default Cast;