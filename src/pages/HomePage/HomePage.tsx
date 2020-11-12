import React from "react";
import SearchForm from "../../components/SearchForm";
import SortPannel from "../../components/SortPannel";
import Loader from "../../components/Loader";

interface IHomePageProps {
  onSearchClick(searchTerm: string, filterBy: string): void;
}
const HomePage = ({ onSearchClick }: IHomePageProps) => (
  <>
    <SearchForm onSearchClick={onSearchClick} />
    {/* <SortPannel /> */}
    {/* //   moviesCount={this.state.tempListOfMovies.length}
    //   onClickSortBy={this.onClickSortByHandler}
    //   sortBy={this.state.sortBy} */}
    {/* <Loader isLoading={this.state.isLoading} />
    {!!this.state.tempListOfMovies.length && (
      <Movies
        movies={this.state.tempListOfMovies}
        onClick={this.onClickByMovie}
      />
    )}
    {!this.state.isLoading && !this.state.tempListOfMovies.length && (
      <NotFound />
    )} */}
    {/* {this.state.movie && (
          <Movie
            movie={this.state.movie!}
            onSearchClick={this.onBackToSearchHandler}
          />
        )} */}
  </>
);
export default HomePage;
