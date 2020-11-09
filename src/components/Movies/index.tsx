import React from "react";
import Item from "../Item";
import { IMovie } from "../../types";
import "./index.scss";

interface IMoviesProps {
  movies: IMovie[];
  onClickHandler(id: number): void;
}

const Movies = ({ movies, onClickHandler }: IMoviesProps) => {
  return (
    <>
      <div className="movies">
        {movies.map((item) => {
          return (
            <Item
              click={() => onClickHandler(item.id)}
              key={item.id}
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
