import React from 'react';
import './index.scss';

interface IItemProps {
    image: string,
    title: string,
    date: number,
    genre: string
}


const Item = ({ image, title, date, genre }: IItemProps) => {
    return (
        <div className="item">
            <img src={`/images/${image}`} alt="image" className="item__img" />
            <div className="item__info">
                <h2>{title}</h2>
                <h3>{date}</h3>
            </div>
            <div>
                <h4>{genre}</h4>
            </div>
        </div>
    )
}

export default Item;