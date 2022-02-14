import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from './moviePage.module.css';
import {getAllMovie, pagination} from "../store";
import {MoviesList} from "../components";


const MoviesPage = () => {
    const dispatch = useDispatch();

    const {
        movies: {results, page, total_pages},
        error,
        status
    } = useSelector(state => state['movieReducer']);

    useEffect(() => {
        dispatch(getAllMovie());
    }, []);

    return (
        <div>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {results && results.map(movie => <MoviesList key={movie.id} movie={movie}/>)}

            <div className={css.buttonBlock}>
                <button onClick={() => page > 1 && dispatch(pagination(page - 1))}>previous
                </button>
                {page}
                <button onClick={() => page < total_pages && dispatch(pagination(page + 1))}>next</button>
            </div>
        </div>
    );
};

export {MoviesPage};