import React from 'react';
import styles from './Film.module.css';
import classNames from 'classnames';

const Film = ({ film, moveToFavourites }) => {
    return (
        <div className={styles.film}>
            <div>
                <img src={film.image} alt='film' className={styles.filmImg} />
            </div>
            <div>
                <h2 className={styles.filmTitle}>{film.title}</h2>
                <p className={styles.filmDescription}>{film.description}</p>
            </div>
            <div>
                <i
                    className={classNames('fas fa-heart', styles.likeBtn, {
                        [styles.active]: film.isFavourite,
                    })}
                    onClick={() => moveToFavourites(film.id)}
                ></i>
            </div>
        </div>
    );
};

export default Film;
