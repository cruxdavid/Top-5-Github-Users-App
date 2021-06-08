import "../Styles/Person.css";

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { FaAngleLeft } from "react-icons/fa";
import React from "react";
import { getUser } from "../API/github";

const Person = () => {
  let { username } = useParams();
  const [userProfile, setUserProfile] = useState({});
  let res = null;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await getUser(username);
      console.log(res);
      setUserProfile({
        avatar_url: res.avatar_url,
        name: res.name,
        location: res.location,
      });
    };

    fetchUser();
  }, []);

  return (
    <>
      <div className="header">
        <div className="icon-container">
          <Link className="person-link" to="/">
            <div>
              <FaAngleLeft />
            </div>
            <div>Back</div>
          </Link>
        </div>
        <h1 className="headerText">Home</h1>
      </div>
      <div className="person-container">
        <img className="image" src={userProfile.avatar_url} />
        <div className="text-container">
          <h1 className="name">{userProfile.name}</h1>
          <h1 className="location">{userProfile.location}</h1>
        </div>
      </div>
      <div className="horizontal-rule"></div>
    </>
  );
};

export default Person;
