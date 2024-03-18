import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <NavLink to={"/login"}>
        <button>login</button>
      </NavLink>
      <button>signup</button>
    </div>
  );
};

export default Home;
