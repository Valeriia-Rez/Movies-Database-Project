import React from "react";
import Button from "../Button";
import "./index.scss";

interface ISortPannelProps {
  moviesCount: number;
  onClickSortBy(sortByType: string): void;
}

const SortPannel = ({ moviesCount, onClickSortBy }: ISortPannelProps) => {
  return (
    <div className="sortPannel">
      {moviesCount ? (
        <>
          <div>
            <p>{moviesCount} movies found</p>
          </div>
          <div>
            <span>Sort by </span>
            <Button
              onClick={() => onClickSortBy("date")}
              buttonName="release date"
            />
            <Button
              onClick={() => onClickSortBy("vote_average")}
              buttonName="rating"
            />
          </div>{" "}
        </>
      ) : null}
    </div>
  );
};

export default SortPannel;
