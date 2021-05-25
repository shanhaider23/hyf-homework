import React from "react";
import Card from "./Card";
import list from "./todolist";


function App() {
  return (
    <div>
      <h1 className="heading">My Todo list</h1>
      {list.map( (list) => (
    <Card
      key={list.id}
      title={list.title}
      img={list.imgURL}
      date={new Date(list.date).toDateString()}
      time={list.time}
    />
  ))}
    </div>
  );
}

export default App;
