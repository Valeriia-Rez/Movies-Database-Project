import React from "react";
import "./index.scss";

interface IItemProps {
  image: string;
  title: string;
  date: number;
  genre: string;
  id?: number;
  click(e: any): void;
}
const Item = ({ image, title, date, genre, id, click }: IItemProps) => {
  return (
    <div className="item" data-id={id} onClick={(e) => click(e)}>
      <div className="item__poster">
        <img src={`/images/${image}`} alt="movie" className="item__img" />
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
