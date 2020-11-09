import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Projects from './components/projects'
import TechnicalSkill from './components/technicalsSkills'
import Experience from './components/Experience'
import Contact from './components/contact'
import Gallery from './components/gallery'
import Achievement from './components/achievements'
class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <Introduction></Introduction>
            <Timeline></Timeline>
            <Projects></Projects>
            <TechnicalSkill></TechnicalSkill>
            <Experience></Experience>
            <Achievement></Achievement>
            <Gallery></Gallery>
            <About></About>
            <Contact></Contact>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
