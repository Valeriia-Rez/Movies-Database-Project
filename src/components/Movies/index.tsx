import React from "react";
import Item from "../Item";
import "./index.scss";

interface IMoviesProps {
  movies: IMovie[];
}

interface IMovie {
  image: string;
  title: string;
  date: number;
  genre: string;
  vote_average: number;
}

const Movies = ({ movies }: IMoviesProps) => {
  return (
    <>
      <div className="movies">
        {movies.map((item, index) => {
          return (
            <Item
              key={index}
              image={item.image}
              title={item.title}
              date={item.date}
              genre={item.genre}
              vote_average={item.vote_average}
            />
          );
        })}
      </div>
    </>
  );
};

export default Movies;