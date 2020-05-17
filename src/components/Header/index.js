import React, { Component } from 'react';

// const Header = () => {
  class Header extends Component {
    render () {
  // let resumeData = this.props.resumeData;
  return (
    <React.Fragment>
    <header id="home">
      <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll header-home-color" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#lessons">Lessons</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            {/* <li><a className="smoothscroll" href="#getStarted">Get Started</a></li> */}
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul>
      </nav>

      <div className="row banner ">
          <div className="banner-text">
            <h1 className="responsive-headline">Brendan Bondurant</h1>
            <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>Music lessons offered in the Park Hill Neigborhood in Denver</h3>
            <hr/>
          </div>
      </div>

      <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>
    </header>
    </React.Fragment>
  );
    }
}

export default Header;