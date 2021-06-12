import React, { useContext } from "react";
import { ProfileContext } from "./ProfileSearch";

function DisplayUser() {
  const { users } = useContext(ProfileContext);

  return (
    <ul>
      {users.map((item) => (
        <li key={item.id}>
          <img src={item.avatar_url} alt="avatar" width="50px" /> {item.login}
          {item.name}
        </li>
      ))}
    </ul>
  );
}
export default DisplayUser;
