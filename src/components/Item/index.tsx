import React from "react";
import "./index.scss";

interface IItemProps {
  image: string;
  title: string;
  date: number;
  genre: string;
  vote_average: number;
}

const Item = ({ image, title, date, genre, vote_average }: IItemProps) => {
  return (
    <div className="item">
      <div className="item__poster">
        <img src={`/images/${image}`} alt="image" className="item__img" />
      </div>
      <div className="item__info">
        <span>{title}</span>
        <span className="item__date">{date}</span>
      </div>
      <div className="item__genre">
        <span>{genre}</span>
      </div>
    </div>
  );
};

export default Item;
