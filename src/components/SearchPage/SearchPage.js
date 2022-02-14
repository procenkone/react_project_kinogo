import React from 'react';
import {useSelector} from "react-redux";

import {MoviesList} from "../MoviesList/MoviesList";

const SearchPage = () => {
    const {searchResults, statusSearchResults} = useSelector(state => state['movieReducer']);

    return (
        <div>
            <div>
                {statusSearchResults && <h1>Load...</h1>}
                {searchResults.results && searchResults.results.map(movie => <MoviesList key={movie.id}
                                                                                         movie={movie}/>)}
            </div>
        </div>
    );
};

export {SearchPage};