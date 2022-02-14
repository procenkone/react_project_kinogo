import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

import css from "./carousel.module.css";
import {TopMovie} from "../TopMovie/TopMovie";
import {getPopular} from "../../store";

const Carousel = () => {
    const {popular, statusPopular} = useSelector(state => state['movieReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopular())
    }, []);

    return (
        <div>
            {statusPopular === 'pending' && <h1>Loading...</h1>}
            <div className={css.carouselWrap}>
                <div className={css.navPanel}>
                    <NavLink to={'/'}><span>ГЛАВНАЯ</span></NavLink>
                    <NavLink to={'/latest'}><span>НОВИНКИ</span></NavLink>
                    <NavLink to={'/tv'}><span>СЕРИАЛЫ</span></NavLink>
                    <NavLink to={'/orderdesc'}><span>СТОЛ ЗАКАЗОВ</span></NavLink>
                </div>

                <div className={css.horizontal}>
                    {popular.results && popular.results.map(movieTop => <TopMovie key={movieTop.id}
                                                                                  movie={movieTop}/>)}
                </div>
            </div>
        </div>
    );
};

export default Carousel;