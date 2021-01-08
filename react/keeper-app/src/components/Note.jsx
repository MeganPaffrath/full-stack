import React from "react";

function Note() {
  var title = "note";
  var content = "This is the content."
  return <div className="note"><h1>{title}</h1><p>{content}</p></div>;
}

export default Note;