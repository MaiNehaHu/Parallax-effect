import React from "react";
import Header from "./Components/Header/Header";
import Parallax from "./Components/Parallax/Parallax";
import "./App.css";
import Body from "./Components/Body/Body";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/Parallax-effect"
          element={
            <React.Fragment>
              <Header />

              <Parallax />

              <Body />
            </React.Fragment>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
