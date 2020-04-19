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
  // const [modalShow, setModalShow] = React.useState(false);
  let imageWithPath = require(`../../data/images/${data.img}`);

  return (
    <>
      <Container>
      <Card className="mx-auto">
        <Row>
          <Col md="2">
            <CardImg className='image m-2' stop width="100%" src={imageWithPath} alt={data.alt} />
          </Col>
          <Col md="10">
          <CardBody>
            <CardTitle className="text-success font-weight-bold">
              <h4>{data.name}</h4>
            </CardTitle>
            <CardSubtitle className="text-monspace">Guitar Since 2009</CardSubtitle>
            <CardText className="mt-3"> {data.text} </CardText>
          </CardBody>
          </Col>
        </Row>
      </Card>
      </Container>
    </>
  );
}

export default TestimonCard;