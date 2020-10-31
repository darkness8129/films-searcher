import React from 'react';
import Film from './Film/Film';
import styles from './FilmsList.module.css';

const FilmsList = ({ films, moveToFavourites }) => {
    return (
        <div>
            {films.map((film) => {
                return (
                    <Film
                        film={film}
                        key={film.id}
                        moveToFavourites={moveToFavourites}
                    />
                );
            })}
        </div>
    );
};

export default FilmsList;
