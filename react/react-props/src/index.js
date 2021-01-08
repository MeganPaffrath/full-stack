import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  console.log(props);
  
  return <div className="my-style">
    <h2>{props.name}</h2>
    <img
      src={props.img}
      alt="avatar_img"
    />
    <p>{props.tel}</p>
    <p>{props.email}</p>
  </div>
}

ReactDOM.render(
  <div>
    <h2>My Contacts</h2>
    <Card 
      name="Beyonce" 
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" 
      tel="+123 456 789" 
      email="b@beyonce.com"/>

    <Card 
      name="Jack Bauer" 
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" 
      tel="+987 654 321" 
      email="jack@nowhere.com"/>
  </div>,
  document.getElementById("root")
);


{/* <h2>Jack Bauer</h2>
<img
  src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
  alt="avatar_img"
/>
<p>+987 654 321</p>
<p>jack@nowhere.com</p>

<h2>Chuck Norris</h2>
<img
  src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
  alt="avatar_img"
/>
<p>+918 372 574</p>
<p>gmail@chucknorris.com</p> */}