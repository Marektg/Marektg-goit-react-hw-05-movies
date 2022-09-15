import apiMovies from 'api/movies';
import React from 'react';
import { useParams } from 'react-router-dom';

// import useFetchMoviesById from '../../hooks/useFetchMoviesById';
// import Loader from '../../components/Loader/Loader';
import ReviewsList from '../../components/Reviews/ReviewsList';

const Reviews = () => {
    const { movieId } = useParams();
    const { movie } = apiMovies.getMoviesReviews(movieId);

    const reviews = movie.results;
    return (
        <>
           
          <ReviewsList reviews={reviews} />
        </>
    );
};

export default Reviews;