import React from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";

const App = () => {
  return (
    <div>
      <h1>Welcome to Context API</h1>
      <Login />
      <Profile />
      <Register/>
    </div>
  );
};

export default App;
