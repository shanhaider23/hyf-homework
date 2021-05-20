import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
    return (
      <div>
        <h2 className="name">{props.title}</h2>
        <Detail className= "info" detailInfo={props.date}/>
        <Detail className="info" detailInfo ={props.time}/>
        <Avatar img className="circle-img" src={props.img} alt="morning" />
        </div>
    );
  }
  export default Card;