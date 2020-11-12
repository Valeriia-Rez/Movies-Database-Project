import React from "react";
import SearchForm from "../../components/SearchForm";
import SortPannel from "../../components/SortPannel";
import Loader from "../../components/Loader";
import Movies from "../../components/Movies";
import NotFound from "../../components/NotFound";
import { IMovie } from "../../types";

interface IHomePageProps {
  onSearchClick(searchTerm: string, filterBy: string): void;
  isLoading: boolean;
  movies: IMovie[];
  moviesCount: number;
  onClickSortBy(sortByType: string): void;
  sortBy: string;
}
const HomePage = ({
  onSearchClick,
  isLoading,
  movies,
  moviesCount,
  onClickSortBy,
  sortBy,
}: IHomePageProps) => (
  <>
    <SearchForm onSearchClick={onSearchClick} />
    <SortPannel
      moviesCount={moviesCount}
      onClickSortBy={onClickSortBy}
      sortBy={sortBy}
    />
    <Loader isLoading={isLoading} />
    {!!movies.length && <Movies movies={movies} />}
    {!isLoading && !movies.length && <NotFound />}
  </>
);
export default HomePage;
