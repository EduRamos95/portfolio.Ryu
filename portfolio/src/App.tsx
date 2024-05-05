import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import AboutMe from './Components/Body/AboutMe';
import Skills from './Components/Body/Skill';
import Experience from './Components/Body/Experience';
import Projects from './Components/Body/Projects';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App__Body">
        <AboutMe/>
        <Skills/>
        <Experience/>
        <Projects/>
      </div>
    </div>
  );
}

export default App;
