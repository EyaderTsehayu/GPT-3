import React from "react";
import {
  Footer,
  Header,
  Possibility,
  WhatGPT3,
  Features,
  Blog,
} from "./containers";
import { Navbar, Brand, Cta } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
