import React from 'react';
import { HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Intro from './sections/Intro';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

const App = () => (
  <HashRouter>
    <Navbar/>
    <Intro/>
    <About/>
    <Skills/>
    <Experience/>
    <Contact/>
    <Footer/>
  </HashRouter>
);

export default App;
