import React from 'react';
import { Container } from 'reactstrap';

import lessons from '../../data/lessons.json';
import pic from '../../data/images/BrendanTeaching.jpg';

const Lessons = () => {
  return (
    <section id="lessons">
      <Container>
        <div className="row">
          <div className="nine columns left-col">
              <h1>Lessons</h1>
              { lessons.map((lesson,index) => {
                return(<p key={index}>{lesson}</p>);
              })}
              {/* <div className="row"> <div className="columns contact-details"> Give me a ring </div> </div> */}
          </div>
          <div className="three columns showWide">
              {/* <img className="profile-pic"  src={pic} alt="Brendan, patient kind teacher with student" /> */}
              <img src={pic} alt="Brendan, patient kind teacher with student" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Lessons;