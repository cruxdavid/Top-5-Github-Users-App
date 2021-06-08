import "../Styles/Person.css";

import { useEffect, useState } from "react";

import React from "react";
import { getUser } from "../API/github";
import { useParams } from "react-router-dom";

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
    <div className="person-container">
      <img className="image" src={userProfile.avatar_url} />
      <div className="text-container">
        <h1 className="name">{userProfile.name}</h1>
        <h1 className="location">{userProfile.location}</h1>
      </div>
    </div>
  );
};

export default Person;
