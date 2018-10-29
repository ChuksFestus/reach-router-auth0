import React from "react";
import Posts from "./Posts";

const Home = props => {
  return (
    <React.Fragment>
      <div className="container pt-5">
        <Posts />
      </div>
    </React.Fragment>
  );
};

export default Home;
