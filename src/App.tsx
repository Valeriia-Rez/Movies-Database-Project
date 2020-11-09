import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Movies from "./components/Movies";
import SortPannel from "./components/SortPannel";
import Loading from "./components/Loading";
import movies from "./movies.json";
import Error from "./components/Error";
import Movie from "./components/Movie";
import { IMovie } from "./types";
import "./App.scss";

interface IAppState {
  movies: IMovie[] | [];
  isLoading: boolean;
  tempListOfMovies: IMovie[] | [];
  filterBy: string;
  sortBy: string;
  searchTerm: string;
  movie?: IMovie;
}

class App extends Component<{}, IAppState> {
  state = {
    movies: [],
    isLoading: false,
    tempListOfMovies: [],
    filterBy: "title",
    sortBy: "date",
    searchTerm: "",
    movie: undefined,
  };

  componentDidMount = () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({
        movies: movies,
        isLoading: false,

        tempListOfMovies: movies,
      });
    }, 2000);
  };

  onSearchHandler = () => {
    const { searchTerm, filterBy, movies } = this.state;
    const tempListOfMovies = movies.filter((movie) => {
      //Ask need regex for exact or not
      if (movie[filterBy] === searchTerm) {
        return movie;
      }
    });
    this.setState({ tempListOfMovies });
    this.setState({ searchTerm: "" });
  };

  onChangeFilterByHandler = (filterBy: string) => {
    this.setState({ filterBy });
  };

  onChangeHandler = (searchTerm: string) => {
    this.setState({ searchTerm });
  };

  onClickSortByHandler = (sortByType: string) => {
    this.setState({ sortBy: sortByType });
    const { movies } = this.state;
    const tempListOfMovies = movies.sort((a, b) => {
      return b[sortByType] - a[sortByType];
    });
    this.setState({ tempListOfMovies });
  };

  onClickByMovie = (e: any) => {
    const id = e.target.parentElement.parentElement.dataset.id;
    const { tempListOfMovies } = this.state;
    const movie = tempListOfMovies.find((item: any) => {
      if (item.id === +id) {
        return item;
      }
    });
    this.setState({ movie });
  };

  render() {
    return (
      <div className="app">
        <Header
          onClickSearch={this.onSearchHandler}
          searchTerm={this.state.searchTerm}
          onChange={this.onChangeHandler}
          onClickFilterBy={this.onChangeFilterByHandler}
          filterBy={this.state.filterBy}
        />
        <SortPannel
          moviesCount={this.state.tempListOfMovies.length}
          onClickSortBy={this.onClickSortByHandler}
          sortBy={this.state.sortBy}
        />
        <Loading isLoading={this.state.isLoading} />
        {this.state.movie && <Movie movie={this.state.movie!} />}
        {this.state.tempListOfMovies.length ? (
          <Movies
            movies={this.state.tempListOfMovies}
            onClickHandler={this.onClickByMovie}
          />
        ) : (
          <Error />
        )}

        <Footer />
      </div>
    );
  }
}

export default App;
