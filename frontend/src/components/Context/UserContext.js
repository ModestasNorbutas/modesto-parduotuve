import React, { useState, createContext } from "react";

export const UserContext = createContext();

export function UserProvider(props) {

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) ||
    {
      "username": "Anonymous",
      "password": ""
    }
  );

  function saveUser(newUser) {
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser)
  }

  return (
    <UserContext.Provider value={{ user, saveUser }}>
      {props.children}
    </UserContext.Provider>
  );
}