import React from "react";
import Card from "./Card";
import contacts from "../contacts.js";
import Avatar from "./Avatar";

function App() {
  console.log(contacts);

  function createCard(contact) {
    return <Card 
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />;
  }

  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://static.thenounproject.com/png/64013-200.png"/>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
