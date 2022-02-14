import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

import css from './genre.module.css'
import {getGenres} from "../../store";


const GenreNav = () => {
    const dispatch = useDispatch();
    const {genres: {genres}, statusGenres} = useSelector(state => state['movieReducer']);

    useEffect(() => {
        dispatch(getGenres())
    }, []);

    return (
        <div className={css.genreWrap}>
            {statusGenres && <h1>Loading...</h1>}
            <div className={css.links}>
                <div className={css.titleBlock}><span>Жанры</span></div>
                <div className={css.navLinkBlock}>
                    {genres && genres.map(genre =>
                        <NavLink key={genre.id}
                                 to={`/genreList/${genre.id}`}>{genre.name[0].toUpperCase() + genre.name.slice(1)}</NavLink>
                    )}
                </div>
            </div>
        </div>
    );
};

export {GenreNav};