import MoviesList from 'components/Movies/MoviesList';
import React, { useEffect, useState } from 'react';
import apiMovies from 'api/movies';
import { TrendiesSection } from './HomePage.styled';
import Loader from 'components/Loader/Loader';

const HomePage = () => {
    const [trendyMovies, setTrendyMovies] = useState([]);
    const [isLoading, setIsLoading] =useState(false)

    const getMovies = async () => {
        try {
            const moviesList = await apiMovies.getTrendyMovies();
            setIsLoading(true)
            setTrendyMovies(moviesList);
        } catch (error) {
            console.log(error);
        };
        setIsLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <TrendiesSection>
            {isLoading && <Loader />}
            <div>
                <h2>Trending today</h2>
            </div>
            <MoviesList movies={trendyMovies} />
        </TrendiesSection>
    );
};

export default HomePage;