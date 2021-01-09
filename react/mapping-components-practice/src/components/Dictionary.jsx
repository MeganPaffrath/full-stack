import React from "react";
import Term from "./Term";
import emojipedia from "../emojipedia.js";

console.log(emojipedia);

function Dictionary() {
  return <dl className="dictionary">
    {emojipedia.map( (emoji) => (
      <Term 
        key={emoji.id}
        emoji={emoji.emoji} 
        name={emoji.name} 
        def={emoji.meaning}
      />
    ))};
  </dl>;
}

export default Dictionary;