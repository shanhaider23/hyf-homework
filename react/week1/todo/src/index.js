import React from 'react';
import ReactDOM from 'react-dom';

function Card(props) {
  return (
    <div>
      <h2 className="name">{props.title}</h2>
      <p className= "info">{props.date}</p>
      <p className="info">{props.time}</p>
      <img className="circle-img" src={props.img} alt="morning" />
      </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Todo list</h1>
    <Card
      title="Get out of bed"
      img="https://i.pinimg.com/originals/fb/48/5b/fb485bf354bf552b730ca431bd0c405f.jpg"
      date="Wed Sep 13 2017"
      time="08:00"
    />
    <Card
      title="Brush teeth"
      img="https://static.vecteezy.com/system/resources/previews/002/007/265/original/a-girl-cartoon-character-brushing-teeth-with-water-sink-free-vector.jpg"
      date="Thu Sep 14 2017"
      time="08:30"
    />
    <Card
      title="Eat breakfastet"
      img="https://www.vhv.rs/dpng/d/412-4120247_eat-breakfast-clip-art-child-eating-breakfast-clipart.png"
      date="Fri Sep 15 2017"
      time="09:00"
    />
  </div>,
  document.getElementById("root")
);