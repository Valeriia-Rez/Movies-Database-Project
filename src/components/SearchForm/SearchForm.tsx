import React, { Component } from "react";
import Input from "../Input";
import Button from "../Button";

interface ISearchFormProps {
  onSearchClick(searchTerm: string, filterBy: string): void;
}

interface ISearchFormState {
  searchTerm: string;
  filterBy: string;
}
class SearchForm extends Component<ISearchFormProps, ISearchFormState> {
  state = {
    searchTerm: "",
    filterBy: "title",
  };

  onChangeHadler = (searchTerm: string) => {
    this.setState({ searchTerm });
  };

  onKeyPressHandler = (e: any) => {
    if (e.keyCode === 13 || e.charCode === 13) {
      this.props.onSearchClick(this.state.searchTerm, this.state.filterBy);
    }
  };

  render() {
    return (
      <>
        <h1>FIND YOUR MOVIE</h1>
        <Input
          value={this.state.searchTerm}
          onChange={this.onChangeHadler}
          onKeyPress={this.onKeyPressHandler}
        />
        <div className="header__searchPannel">
          <div className="header__searchBy">
            <span className="header__text">SEARCH BY</span>
            <Button
              onClick={() => this.setState({ filterBy: "title" })}
              className={
                this.state.filterBy === "title" ? "active" : "btn-title"
              }
              buttonName="TITLE"
            />
            <Button
              onClick={() => this.setState({ filterBy: "genre" })}
              className={
                this.state.filterBy === "genre" ? "active" : "btn-genre"
              }
              buttonName="GENRE"
            />
          </div>
          <div>
            <Button
              buttonName="SEARCH"
              className="searchButton"
              onClick={() =>
                this.props.onSearchClick(
                  this.state.searchTerm,
                  this.state.filterBy
                )
              }
            />
          </div>
        </div>
      </>
    );
  }
}

export default SearchForm;
