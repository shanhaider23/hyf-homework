import React from "react";
import logo from "./logo.jpg";
import "./App.css";
import UserProfileComponent from "./components/ProfileSearch";
import Profile from "./components/Profile";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1> Github users search</h1>
      <UserProfileComponent />
      <Profile />
    </div>
  );
}

export default App;
