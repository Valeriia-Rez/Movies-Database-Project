import React from "react";
import "./index.scss";

const Loading = ({ isLoading }: { isLoading: boolean }) => {
  return <div className="loading">{isLoading && <p>Loading...</p>}</div>;
};

export default Loading;
