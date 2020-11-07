import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Movies from "./components/Movies";
import SortPannel from "./components/SortPannel";
import Loading from "./components/Loading";
import movies from "./movies.json";
import Error from "./components/Error";
import "./App.scss";

class App extends Component {
  state = {
    movies: [],
    isLoading: false,
    tempListOfMovies: [],
    filterBy: "title",
    sortBy: "date",
    searchTerm: "",
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
    this.setState({ sortByType });
    const { movies } = this.state;
    const tempListOfMovies = movies.sort((a, b) => {
      return b[sortByType] - a[sortByType];
    });
    this.setState({ tempListOfMovies });
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
        <Loading isLoading={this.state.isLoading} />
        <SortPannel
          moviesCount={this.state.tempListOfMovies.length}
          onClickSortBy={this.onClickSortByHandler}
          sortBy={this.state.sortBy}
        />
        {this.state.tempListOfMovies.length ? (
          <Movies movies={this.state.tempListOfMovies} />
        ) : (
          <Error />
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
