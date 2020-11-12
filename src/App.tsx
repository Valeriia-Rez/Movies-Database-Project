import React, { Component } from "react";
import movies from "./movies.json";
import { IMovie } from "./types";
import HomePage from "./pages/HomePage";
import "./App.scss";
import Layout from "./components/Layout";

interface IAppState {
  movies: IMovie[] | [];
  isLoading: boolean;
  tempListOfMovies: IMovie[] | [];
  movie?: IMovie;
  sortBy: string;
}

class App extends Component<{}, IAppState> {
  state = {
    movies: [],
    isLoading: false,
    tempListOfMovies: [],
    movie: undefined,
    sortBy: "date",
  };

  onSearchHandler = (searchTerm: string, filterBy: string) => {
    console.log(searchTerm, filterBy);
    // this.setState({ movie: undefined, isLoading: true, searchTerm: "" });
    // const { searchTerm, filterBy, movies } = this.state;
    // const tempListOfMovies = movies.filter(
    //   (movie) => movie[filterBy] === searchTerm
    // );
    // setTimeout(() => {
    //   this.setState({ tempListOfMovies, isLoading: false });
    // }, 1000);
  };

  componentDidMount = () => {
    this.setState({ isLoading: true });

    setTimeout(() => {
      this.setState({
        movies: movies,
        isLoading: false,
        tempListOfMovies: movies.sort((a, b) => b.date - a.date),
      });
    }, 1000);
  };

  onClickSortByHandler = (sortByType: string) => {
    const { tempListOfMovies } = this.state;
    const tempListSortMovies = tempListOfMovies.sort((a, b) => {
      return b[sortByType] - a[sortByType];
    });
    this.setState({ sortBy: sortByType, tempListOfMovies: tempListSortMovies });
  };

  moviesBySameGenre = (movie: IMovie) => {
    const filteredMovies = movies.filter((movieItem) => {
      return movieItem.genre === movie.genre && movieItem.id !== movie.id;
    });
    return filteredMovies;
  };

  onClickByMovie = (id: number) => {
    const { tempListOfMovies } = this.state;
    const movie = tempListOfMovies.find((item: IMovie) => item.id === id);
    const moviesByGenre = this.moviesBySameGenre(movie!);
    this.setState({ movie, tempListOfMovies: moviesByGenre });
  };

  onBackToSearchHandler = () => {
    const { movies } = this.state;
    this.setState({
      movie: undefined,
      tempListOfMovies: movies.sort((a: IMovie, b: IMovie) => b.date - a.date),
    });
  };

  render() {
    return (
      <Layout>
        <HomePage
          onSearchClick={this.onSearchHandler}
          isLoading={this.state.isLoading}
          movies={this.state.tempListOfMovies}
          onClick={this.onClickByMovie}
          movie={this.state.movie!}
          onBackSearchClick={this.onBackToSearchHandler}
          moviesCount={this.state.tempListOfMovies.length}
          onClickSortBy={this.onClickSortByHandler}
          sortBy={this.state.sortBy}
        />
      </Layout>
    );
  }
}

export default App;
