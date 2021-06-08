import "../Styles/Home.css";

import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="header">
        <h1 className="headerText">Home</h1>
      </div>
      <div className="container">
        <h1 className="title">Top 5 Github Users</h1>
        <p className="info">Tap the username to see more information</p>
        <Link className="link" to="/Person/GrahamCampbell">
          <button className="button">GrahamCampbell</button>
        </Link>
        <Link className="link" to="/Person/fabpot">
          <button className="button">fabpot</button>
        </Link>
        <Link className="link" to="/Person/weierophinney">
          <button className="button">weierophinney</button>
        </Link>
        <Link className="link" to="/Person/rkh">
          <button className="button">rkh</button>
        </Link>
        <Link className="link" to="/Person/josh">
          <button className="button">josh</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
