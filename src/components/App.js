import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user";

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} avatar={user.avatar} bio={user.bio} />
      <About  bio={user.bio} github={user.social.github} linkedin={user.social.linkedin} />
    </div>
  );
}

export default App;
