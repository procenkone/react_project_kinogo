import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

import css from './upcoming.module.css';
import {getUpcoming} from "../../store";

const Upcoming = () => {
    const dispatch = useDispatch();
    const {upcoming: {results}, statusUpcoming} = useSelector(state => state['movieReducer']);

    useEffect(() => {
        dispatch(getUpcoming());
    }, []);

    function truncate(str, maxlength) {
        return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
    }

    return (
        <div className={css.upcomingWrap}>
            {statusUpcoming && <h1>Loading...</h1>}

            <div className={css.titleBlock}>
                <p>Скоро в кино</p>
            </div>

            {results && results.map(movie =>
                <div key={movie.id} className={css.movieItem}>
                    <NavLink to={`/movie/${movie.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}/>
                    </NavLink>

                    <div className={css.movieInfo}>
                        <NavLink to={`/movie/${movie.id}`}>{movie.title}</NavLink>
                        <div className={css.overviewBlock}>
                            <div className={css.overview}>
                                <p>{truncate(movie.overview, 90)}</p>
                            </div>

                            <div className={css.year}>
                                <span>Год: {movie.release_date.toString().slice(0, 4)} </span>
                                <span>Страна: {movie.original_language} </span>
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>
    );
};

export default Upcoming;