import React from 'react';
import movies from '../../movies.json';
import Item from '../Item';
import './index.scss';


const SortByRatingFilms = () => {
    return (
        <div className="ratingFilms">
          {movies.map((item, index) => {
             return <Item
              key={index}
              image={item.image} 
              title={item.title}
              date={item.date} 
              genre={item.genre}/>
          })}
        </div>
    )
}

export default SortByRatingFilms;