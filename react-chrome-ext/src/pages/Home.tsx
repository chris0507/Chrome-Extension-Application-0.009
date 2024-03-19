import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <NavLink to={"/login"}>
        <button>login</button>
      </NavLink>
      <NavLink to={"/signUp"}>
        <button>signup</button>
      </NavLink>
    </div>
  );
};

export default Home;
