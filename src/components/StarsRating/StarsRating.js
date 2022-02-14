import React, {useState} from "react";

import css from './starRating.module.css';

const StarsRating = ({ratingDB}) => {
    const [hover, setHover] = useState(0);

    return (
        <div className={css.starsWrap}>
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button
                        type="button"
                        key={index}
                        className={index <= (hover || ratingDB) ? `${css.on}` : `${css.off}`}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(ratingDB)}
                    >
                        <span>&#9733;</span>
                    </button>
                );
            })}
        </div>
    );
};

export {StarsRating}