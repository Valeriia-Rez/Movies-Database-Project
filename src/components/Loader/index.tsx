import React from "react";
import "./index.scss";

const Loader = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <>
      {isLoading && (
        <div className="loading">
          <p>Loading...</p>
        </div>
      )}
    </>
  );
};

export default Loader;
