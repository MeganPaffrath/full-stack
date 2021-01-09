import React from "react";
import Term from "./Term";
import emojipedia from "../emojipedia.js";

function createTerm(emoji) {
  return <Term 
    key={emoji.id}
    emoji={emoji.emoji} 
    name={emoji.name} 
    def={emoji.meaning}
  />
}

console.log(emojipedia);

function Dictionary() {
  return <dl className="dictionary">

    {emojipedia.map(createTerm)};
  </dl>;
}

export default Dictionary;