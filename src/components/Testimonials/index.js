import React from 'react';
import { Container,Row } from 'reactstrap';

import TestimonCard from '../TestimonCard';
import testimons  from '../../data/testimonials.json';

import './style.css';

const Testimonials = () => {
  return (
    <section id="testimonials">
              <h1>Testimonials</h1>
      {/* <Container> */}
              { testimons.map((testimon) => {
                return(
                  <Row className="test-row" >
                    <TestimonCard
                      key={testimon.id}
                      name={testimon.name}
                      img={testimon.img}
                      alt={testimon.alt}
                      text={testimon.text}
                    />
                  </Row>
                );
              })} 
      {/* </Container> */}
    </section>
  )
}

export default Testimonials;