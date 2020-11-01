import React, { useState } from 'react';

import styles from './FilmsSearcher.module.css';

const FilmsSearcher = ({ searchFilms }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    return (
        <div className={styles.filmsSearcher}>
            <input
                className={styles.searchField}
                type='text'
                placeholder='Search for a movie...'
                onChange={handleChange}
            />
            <button
                className={styles.searchBtn}
                onClick={() => searchFilms(searchQuery)}
            >
                Search
            </button>
        </div>
    );
};

export default FilmsSearcher;
