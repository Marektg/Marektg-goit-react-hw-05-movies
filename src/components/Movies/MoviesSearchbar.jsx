import React from 'react'
import { Searchbar, SearchbarWrapper } from './MoviesSearchbar.styled';
import PropTypes from 'prop-types';

const MoviesSearchbar = ({ value, submitHandler, changeHandler }) => {
    return (
        <SearchbarWrapper>
            <Searchbar onSubmit={submitHandler}>
                <input
                    type="text"
                    value={value}
                    onChange={changeHandler}
                />
                <button type="submit" >
                    <p>Search</p>
                </button>
            </Searchbar>
        </SearchbarWrapper>
    );
};

MoviesSearchbar.propTypes = {
    value: PropTypes.string.isRequired,
    submitHandler: PropTypes.func.isRequired,
    changeHandler: PropTypes.func.isRequired,
}

export default MoviesSearchbar;