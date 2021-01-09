import React from "react";

function Term(props) {
  return <div className="term">
  <dt>
    <span className="emoji" role="img" aria-label={props.name}>
      {props.emoji}
    </span>
    <span>{props.name}</span>
  </dt>
  <dd>
    {props.def}
  </dd>
</div>;
}

export default Term;