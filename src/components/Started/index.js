import React from 'react';

// import { bio } from '../../data/bio.json';
import pic from '../../data/images/BrendanTeaching.jpg';
let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

const Started = () => {
  return (
    <section id="getStarted">
        <div className="row">
          <div className="nine columns main-col">
              <h1>Getting Started</h1>
              <p>{text}</p>
              <div className="row">
                <div className="columns contact-details">
                  Give me a ring
                </div>
              </div>
          </div>
          <div className="three columns">
              {/* <img className="profile-pic"  src={pic} alt="Brendan, patient kind teacher with student" /> */}
              <img src={pic} alt="Brendan, patient kind teacher with student" />
          </div>
        </div>
    </section>
  );
}

export default Started;