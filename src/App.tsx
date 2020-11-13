import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import movies from "./movies.json";
import { IMovie } from "./types";
import HomePage from "./pages/HomePage";
import "./App.scss";
import Layout from "./components/Layout";
import MovieDetails from "./pages/MovieDetails";
import NotFoundPage from "./pages/NotFoundPage";

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

  onSearchHandler = (searchTerm: string, filterBy: any) => {
    this.setState({ movie: undefined, isLoading: true });

    const tempListOfMovies = movies.filter(
      (movieItem) =>
        (filterBy === "title" && movieItem.title === searchTerm) ||
        (filterBy === "genre" && movieItem.genre === searchTerm)
    );
    setTimeout(() => {
      this.setState({ tempListOfMovies, isLoading: false });
    }, 1000);
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
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <HomePage
                onSearchClick={this.onSearchHandler}
                isLoading={this.state.isLoading}
                movies={this.state.tempListOfMovies}
                moviesCount={this.state.tempListOfMovies.length}
                onClickSortBy={this.onClickSortByHandler}
                sortBy={this.state.sortBy}
                {...props}
              />
            )}
          />

          <Route
            path="/film/:id"
            render={(props) => (
              <MovieDetails
                movies={this.state.movies!}
                onBackSearchClick={this.onBackToSearchHandler}
                {...props}
              />
            )}
          />
          <Route render={() => <NotFoundPage />} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
