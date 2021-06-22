import React, { useContext } from "react";
import { ProfileContext } from "./ProfileSearch";
import DisplayUser from "./DisplayUsers";

function Input() {
  const { gitHubApiHandler } = useContext(ProfileContext);
  const onChangeHandler = (event) => {
    gitHubApiHandler(event.target.value);
  };
  return (
    <div>
      <input type="text" onChange={onChangeHandler} />
      <DisplayUser />
    </div>
  );
}
export default Input;
