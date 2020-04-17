import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Lessons from './components/Lessons';
import Testimonials from './components/Testimonials';
import Started from './components/Started';
import Contact from './components/Contact';

import data from './data/bio.json';

const App = () => {
  // class App extends Component {
    // render () {
  return (
    <div className="App">
      <Header />
      <About props={data.bio}/>
      <Lessons />
      <Testimonials />
      <Started />
      <Contact />
    </div>
  );
    // }
}

export default App;
