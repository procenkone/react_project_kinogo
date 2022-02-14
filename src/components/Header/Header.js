import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import css from './header.module.css';
import {searchMovie} from "../../store";
import {UserInfo} from "../UserInfo/UserInfo";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault();
        dispatch(searchMovie(e.target.searchMovie.value.toLowerCase()));
        navigate('/search');
        e.target.reset();
        return
    }

    return (
        <div className={css.headerWrap}>
            <div className={css.logo}>
                <NavLink to={'/'}>
                    <img src={"https://kinogo.zone/templates/tmp/images/kinogo.png"} alt={"смотреть киного онлайн"}/>
                </NavLink>
            </div>

            <div style={{display: 'flex', gap: '20px'}}>
                <UserInfo/>
                <form onSubmit={submit}>
                    <input type={'text'} name={'searchMovie'} placeholder={'Поиск'}/>
                    <button>ok</button>
                </form>
            </div>
        </div>
    );
};

export {Header};