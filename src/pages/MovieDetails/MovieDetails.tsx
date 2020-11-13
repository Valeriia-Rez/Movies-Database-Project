import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import { IMovie } from "../../types";
import Movie from "../../components/Movie";
import { RouteComponentProps } from "react-router";
import movies from "../../movies.json";
import Movies from "../../components/Movies";
import NotFoundPage from "../../pages/NotFoundPage";

interface IRouteInfo {
  id: string;
}

interface IMovieDetailsProps extends RouteComponentProps<IRouteInfo> {
  onBackSearchClick(): void;
  movies: IMovie[];
}

interface IMovieDetailsState {
  movie?: IMovie;
  moviesBySameGenre: IMovie[];
}

class MovieDetails extends Component<IMovieDetailsProps, IMovieDetailsState> {
  state = {
    movie: undefined,
    moviesBySameGenre: [],
  };

  componentDidMount = () => {
    const filmId = this.props.match.params.id;
    let moviesData = this.props.movies.length ? this.props.movies : movies;
    const movie = moviesData.find((movie) => {
      return movie.id === +filmId;
    });
    const moviesBySameGenre = moviesData.filter((movieByGenre) => {
      return movie?.genre === movieByGenre.genre;
    });
    this.setState({ movie, moviesBySameGenre });
  };

  componentDidUpdate = (prevProps: any) => {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      let moviesData = this.props.movies.length ? this.props.movies : movies;
      const movie = moviesData.find((movie) => {
        return movie.id === +this.props.match.params.id;
      });
      this.setState({ movie });
    }
  };

  render() {
    return (
      <>
        {this.state.movie ? (
          <>
            <Logo />
            <Link to="/">
              <Button
                buttonName="SEARCH"
                onClick={() => null}
                className="searchButton movieButton"
              />
            </Link>
            <Movie movie={this.state.movie} />
          </>
        ) : (
          <div>
            <p>The film by this id is not exist</p>
          </div>
        )}
        <Movies movies={this.state.moviesBySameGenre} />
      </>
    );
  }
}

export default MovieDetails;
