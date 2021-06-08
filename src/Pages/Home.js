import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
  return (
    <div>
      <Link style={{ paddingLeft: "10px" }} to="/Person/GrahamCampbell">
        GrahamCampbell
      </Link>
      <Link style={{ paddingLeft: "10px" }} to="/Person/fabpot">
        fabpot
      </Link>
      <Link style={{ paddingLeft: "10px" }} to="/Person/weierophinney">
        weierophinney
      </Link>
      <Link style={{ paddingLeft: "10px" }} to="/Person/rkh">
        rkh
      </Link>
      <Link style={{ paddingLeft: "10px" }} to="/Person/josh">
        josh
      </Link>
    </div>
  );
};

export default Home;
