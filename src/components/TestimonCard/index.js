import React from 'react';
import { 
  Card,
  CardBody,
  CardText,
  CardSubtitle,
  CardTitle,
  CardImg,
  Col,
  Container,
  Row
} from 'reactstrap';

import './style.css';

const TestimonCard = ( data ) => {

  console.log("data",data);
  // let imageWithPath = require(`../../data/images/${data.img}`);

  return (
    <>
      <Container>
      <Card className="mx-auto">
        <CardBody>
          <CardText className="mt-3 card-text"> "{data.text}" </CardText>
            <h4> - {data.name}</h4>
            {/* <h3>{data.name}</h3> */}
            <h5>Student of Guitar since 1895</h5>
        </CardBody>
      </Card>
      </Container>
    </>
  );
}

export default TestimonCard;