import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export const FILMS = [
    {
        id: 1,
        title: 'Joker',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Alias debitis quam reprehenderit esse voluptates hic sit beatae odio dolore laudantium?',
        image: 'https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673.png',
        isFavourite: false
    },
    {
        id: 2,
        title: 'Tenet',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Alias debitis quam reprehenderit esse voluptates hic sit beatae odio dolore laudantium?',
        image: 'https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673.png',
        isFavourite: false
    },
    {
        id: 3,
        title: 'Iron Man',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Alias debitis quam reprehenderit esse voluptates hic sit beatae odio dolore laudantium?',
        image: 'https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673.png',
        isFavourite: false
    }
];

ReactDOM.render(
    <React.StrictMode>
        <App initialFilms={FILMS} />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
