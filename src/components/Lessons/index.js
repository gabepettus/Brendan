import React from 'react';
import pic from '../../data/images/BrendanTeaching.jpg';
import { lessons } from '../../data/lessons.json';

const Lessons = () => {
  return (
    <section id="lessons">
        <div className="row">
          <div className="three columns">
              {/* <img className="profile-pic"  src={pic} alt="Brendan, patient kind teacher with student" /> */}
              <img src={pic} alt="Brendan, patient kind teacher with student" />
          </div>
          <div className="nine columns main-col">
              <h1>Lessons</h1>
              <p>{lessons}</p>
              {/* <div className="row"> <div className="columns contact-details"> Give me a ring </div> </div> */}
          </div>
        </div>
    </section>
  );
}

export default Lessons;