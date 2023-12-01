import React from "react";
import "./App.css";
import { Navbar, Brand, CTA } from "./components";
import { Header, Possibility, Blog, Footer,WhatGPT3,Features } from "./containers";
import "./index.css";

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
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
