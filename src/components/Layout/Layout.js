import React from 'react';
import {Outlet} from "react-router-dom";

import css from './layout.module.css';
import {Footer, GenreNav, Header} from "../index";
import Carousel from "../Carousel/Carousel";
import Upcoming from "../Upcoming/Upcoming";

const Layout = () => {
    return (
        <div className={css.wrapLayout}>
            <Header/>
            <Carousel/>
            <div className={css.moviePageWrap}>
                <div className={css.navigate}><span>Навигация</span></div>
                <GenreNav/>
                <Upcoming/>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export {Layout};