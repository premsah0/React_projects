import React, { useState } from "react";
import { useContext, createContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const eventHandler = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <>
      <div>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={eventHandler}>subbmit</button>
      </div>
    </>
  );
}

export default Profile;
