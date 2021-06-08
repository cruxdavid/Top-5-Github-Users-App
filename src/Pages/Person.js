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
    <div style={{ paddingTop: "40px", paddingLeft: "40px" }}>
      <img
        style={{ height: "80px", width: "80px", borderRadius: 40 }}
        src={userProfile.avatar_url}
      />
      <h1>{userProfile.name}</h1>
      <h1>{userProfile.location}</h1>
    </div>
  );
};

export default Person;
