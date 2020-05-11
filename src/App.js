import React from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Lessons from './components/Lessons';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
      {/* <Started /> */}
      <Contact />
      <Footer />
    </div>
  );
    // }
}

export default App;
