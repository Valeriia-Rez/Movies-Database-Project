import React from "react";
import MovieItem from "../MovieItem";
import { IMovie } from "../../types";
import "./Movies.scss";

interface IMoviesProps {
  movies: IMovie[];
  onClick(id: number): void;
}

const Movies = ({ movies, onClick }: IMoviesProps) => (
  <div className="movies">
    {movies.map((item) => {
      return (
        <MovieItem onClick={() => onClick(item.id)} key={item.id} {...item} />
      );
    })}
  </div>
);

export default Movies;
