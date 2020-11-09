import React from "react";
import Logo from "../Logo";
import { IMovie } from "../../types";
import Button from "../Button";

interface IMovieProps {
  movie: IMovie;
  onClickSearch(): void;
}

const Movie = ({ movie, onClickSearch }: IMovieProps) => {
  {
    return (
      <div>
        <Logo />
        <Button buttonName="search" onClick={onClickSearch} />
        <div>
          <div>
            <img src={`/images/${movie.image}`} alt={movie.title}></img>
          </div>
          <div>
            <h2>{movie.title}</h2>
            <span>{movie.vote_average}</span>
            <span>{movie.genre}</span>
            <span>{movie.date}</span>
            <span>{movie.duration}</span>
            <p>{movie.description}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Movie;
