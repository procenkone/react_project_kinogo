import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from "./tv.module.css";
import {tvList, tVpagination} from "../../store";
import {MoviesList} from "../MoviesList/MoviesList";

const TvPage = () => {
    const {tv: {results, page, total_pages}, statusTv} = useSelector(state => state['movieReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(tvList());
    }, []);

    return (
        <div className={css.tvWrap}>
            <div>
                {statusTv && <h1>Loading...</h1>}
                {results && results.map(movie => <MoviesList key={movie.id} movie={movie}/>)}
            </div>

            <div className={css.buttonBlock}>
                <button onClick={() => page > 1 && dispatch(tVpagination(page - 1))}>previous
                </button>
                {page}
                <button onClick={() => page < total_pages && dispatch(tVpagination(page + 1))}>next</button>
            </div>
        </div>
    );
};

export {TvPage};