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
            <div className="item__poster">
                <img src={`/images/${image}`} alt="image" className="item__img" />
            </div>
            <div className="item__info">
                <span>{title}</span>
                <span>{date}</span>
            </div>
            <div>
                <span>{genre}</span>
            </div>
        </div>
    )
}

export default Item;