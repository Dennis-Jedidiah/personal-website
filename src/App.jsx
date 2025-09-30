import { Component } from "react";
import Hero from "./components/Hero";
import NavigationBar from "./components/NavigationBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <AboutMe />
      <Projects />
    </>
  );
}

export default App;
