import React from 'react';
import { Container,Row } from 'reactstrap';

import TestimonCard from '../TestimonCard';
import testimons  from '../../data/testimonials.json';

let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
const Testimonials = () => {
  return (
    <section id="testimonials">
      <Container>
              <h2>Testimonials</h2>
              { testimons.map((testimon) => {
                console.log("testimon",testimon);
                return(
                  <Row>

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
      </Container>
    </section>
  )
}

export default Testimonials;