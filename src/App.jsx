import React from "react";
import Header from "./Components/Header/Header";
import Parallax from "./Components/Parallax/Parallax";
import "./App.css";
import Body from "./Components/Body/Body";

const App = () => {
  return (
    <React.Fragment >
      <Header />

      <Parallax />

      <Body />
    </React.Fragment>
  );
};

export default App;
