import React from 'react';
import FilmsList from './components/FilmsList/FilmsList';
import './App.css';
import FilmsSearcher from './components/FilmsSearcher/FilmSearcher';

const films = [
    {
        id: 1,
        title: 'Joker',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias debitis quam reprehenderit esse voluptates hic sit beatae odio dolore laudantium?'
    },
    {
        id: 2,
        title: 'Tenet',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias debitis quam reprehenderit esse voluptates hic sit beatae odio dolore laudantium?'
    },
    {
        id: 3,
        title: 'Iron Man',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias debitis quam reprehenderit esse voluptates hic sit beatae odio dolore laudantium?'
    }
];



const App = () => {
    return (
        <div className="App">
            <div className="container">
                <FilmsSearcher />
                <FilmsList />
            </div>
        </div>
    );
}

export default App;
