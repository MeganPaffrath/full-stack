import React from "react";
import Input from "./Input";

function Login(props) {
  return (
    <form className="form">
      <Input 
        type="text"
        placeholder="Username"
      />
      <div>
        <Input 
          type="password"
          placeholder="Password"
        />
      </div>
      {!props.registered && (
        <Input 
          type="password"
          placeholder="Password"
        />
      )}
      <button type="submit"> {props.registered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Login;