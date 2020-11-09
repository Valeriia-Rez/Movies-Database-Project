import React from "react";
import Item from "../Item";
import { IMovie } from "../../types";
import "./index.scss";

interface IMoviesProps {
  movies: IMovie[];
  onClickHandler(e: any): void;
}

const Movies = ({ movies, onClickHandler }: IMoviesProps) => {
  return (
    <>
      <div className="movies">
        {movies.map((item, index) => {
          return (
            <Item
              click={(e: any) => onClickHandler(e)}
              id={item.id}
              key={index}
              image={item.image}
              title={item.title}
              date={item.date}
              genre={item.genre}
            />
          );
        })}
      </div>
    </>
  );
};

export default Movies;
