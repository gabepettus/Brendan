import React, { useState } from 'react';
// import { bio } from '../../data/bio.json';
import { 
  Card,
  CardTitle,
  CardText,
  Container,
  Button,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import axios from 'axios';

import pic from '../../data/images/BrendanTeaching.jpg';

// let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

const Contact = () => {
  const [serverState, setServerState] = useState ({
  submitting: false,
    status: null
  });

  const handleServerResponse = ( ok, msg, form) => {
    setServerState({
      submitting: false,
      status: {ok, msg}
    });
    if (ok) {
      form.reset();
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: 'post',
      url: 'https://formspree.io/mknvwqvr',
      data: new FormData(form)
    })
    .then ( r => {
      handleServerResponse(true, 'Thanks! Look forward to talking with you.',form);
    })
    .catch( r => {
      handleServerResponse(false, r.response.data.error, form);
    });
  };

  return (
    <section id="contact">
      <Container>
        <div className="row">
          <div className="three columns showWide">
              <img src={pic} alt="Brendan, patient kind teacher with student" />
          </div>
          <div className="nine columns main-col">
            <Card>
            <form onSubmit={handleOnSubmit}>
              <CardTitle className='mt-5 ml-5'>
                {/* <h3>Gabe Pettus</h3> */}
            <h1>Ask about getting started with lesson</h1>
              </CardTitle>
              {/* <CardSubtitle className='text-monospace ml-5'> */}
                {/* Junior Software Engineer */}
              {/* </CardSubtitle> */}
              <CardText className='ml-5'>
                 
              </CardText>
              <FormGroup className='mx-5'>
                <Label htmlFor='email'>
                  Email:
                </Label>
                <Input id='email' type='email' name='email' required />
              </FormGroup>
              <FormGroup className='mx-5'>
                <Label htmlFor='message'>
                  Message:
                </Label>
                <Input type='textarea' id='message' name='message' placeholder='Hi Brendan my name is <name> I am interesting in taking <instrument> lessons. I have <experiance> and am particualy interested in learning <backing cookies>' />
              </FormGroup>
              <FormGroup className='ml-5'>
                <Button className='btn btn-lg m-2' type='submit' disabled={serverState.submitting}>
                  Send Message
                </Button>
                {serverState.status && (
                  <p className={!serverState.status.ok ? 'errorMsg' :''} >
                    {serverState.status.msg}
                  </p>
                )}
              </FormGroup> 
            </form>
          </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;