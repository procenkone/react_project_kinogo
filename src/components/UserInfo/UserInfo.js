import React from 'react';

import css from './userInfo.module.css';

const UserInfo = () => {
    const defUrl = 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-48.png';

    return (
        <div className={css.user}>
            <img src={defUrl} alt={'avatar'}/>
            Piter Parker
        </div>
    );
};

export {UserInfo};