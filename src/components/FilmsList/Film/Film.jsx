import React from 'react';
import styles from './Film.module.css';

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
            <div
                className={styles.likeBtn}
                onClick={() => moveToFavourites(film.id)}
            ></div>
        </div>
    );
};

export default Film;
