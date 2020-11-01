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

        setFilms(displayedFilms.filter(film => film.isFavourite).concat(displayedFilms.filter(film => !film.isFavourite)));
    };

    const moveToFavourites = (id) => {
        const oldIndex = films.findIndex(film => film.id === id);
        const copy = [...films];
        let film = copy.splice(oldIndex, 1)[0];

        if (!film.isFavourite) {
            film.isFavourite = true;
            copy.unshift(film);
        } else {
            film.isFavourite = false;
            copy.push(film);
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
