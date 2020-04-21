import React from 'react';

import { bio } from '../../data/bio.json';
import pic from '../../data/images/BrendanTeaching.jpg';

const About = () => {
  return (
    <section id="about">
        <div className="row">
          <div className="three columns">
              {/* <img className="profile-pic"  src={pic} alt="Brendan, patient kind teacher with student" /> */}
              <img src={pic} alt="Brendan, patient kind teacher with student" />
          </div>
          <div className="nine columns right-col">
              <h1>About</h1>
              <p>{bio}</p>
              <div className="row">
                {/* <div className="columns contact-details"> </div> */}
              </div>
          </div>
        </div>
    </section>
  );
}

export default About;