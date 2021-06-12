// This is solution for Github users search with use of Context Api.
import React, { useState, useEffect, createContext } from "react";

import Input from "./InputForm";

export const ProfileContext = createContext("");

function UserProfileComponent() {
  const [iserror, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const gitHubApiHandler = async (query) => {
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${query}`
      );
      if (!response.ok) {
        const message = `Problem with fetching Data: ${response.status}`;
        throw Error(message);
      }
      const data = await response.json();
      setIsLoading(true);
      setUsers(data.items);
    } catch (error) {
      setIsLoading(true);
      setIsError(error);
    }
  };

  useEffect(() => {
    gitHubApiHandler();
  }, []);

  if (iserror) {
    return <div>Error: {iserror.message}</div>;
  } else if (!isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <ProfileContext.Provider value={{ users, gitHubApiHandler }}>
        <Input />
      </ProfileContext.Provider>
    );
  }
}

export default UserProfileComponent;
