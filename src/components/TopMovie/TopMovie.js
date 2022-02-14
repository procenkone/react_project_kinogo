import React from 'react';
import {NavLink} from "react-router-dom";

import css from './topMovie.module.css';


const TopMovie = ({movie: {poster_path, title, id}}) => {

    return (
        <div className={css.movieItem}>
            <NavLink to={`movie/${id}`}>
                <img title={title} src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title}/>
            </NavLink>
        </div>
    );
};

export {TopMovie};