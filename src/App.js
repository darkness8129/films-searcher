import React, { useState } from 'react';
import FilmsList from './components/FilmsList/FilmsList';
import styles from './App.module.css';
import FilmsSearcher from './components/FilmsSearcher/FilmsSearcher';

const App = ({ initialFilms }) => {
    const [films, setFilms] = useState(initialFilms);

    const handleSearch = (searchQuery) => {
        let displayedFilms = initialFilms.filter((film) => {
            let searchValue = film.title.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });
        setFilms(displayedFilms);
    };

    const moveToFavourites = (id) => {
        const oldIndex = films.findIndex(film => film.id === id);
        const copy = [...films];

        if (oldIndex !== 0) {
            copy.unshift(copy.splice(oldIndex, 1)[0]);
        } else {
            copy.push(copy.splice(oldIndex, 1)[0]);
        }

        setFilms(copy);
    }

    return (
        <div className="App">
            <div className={styles.container}>
                <FilmsSearcher searchFilms={handleSearch} />
                <FilmsList films={films} moveToFavourites={moveToFavourites} />
            </div>
        </div>
    );
}

export default App;
