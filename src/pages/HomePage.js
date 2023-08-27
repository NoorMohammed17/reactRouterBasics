import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <p>
        {" "}
        Go to <Link to='/products'> the list of products</Link>
      </p>
    </div>
  );
};

export default HomePage;
