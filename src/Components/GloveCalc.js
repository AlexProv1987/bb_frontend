import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import axiosBaseURL from '../http';
import Container from 'react-bootstrap/esm/Container';
import LoadIcon from './LoadingIcon';

const GloveCalc = () => {

  const regex = /^[0-9\b]+$/;
  const [position, setPosition] = useState('');
  const [age, setAge] = useState('')
  const [size, setSize] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const HandleBackSpace = (event) => {
    if (event.key === 'Backspace') {
      switch (event.target.name) {
        case 'age':
          if (age.length === 1) {
            setAge('')
          }
          return;
        default:
          return;
      }
    }
  }

  const HandleSelect = (event) => {
    setPosition(event.target.value);
  };
  const HandleAgeChange = (event) => {
    if (regex.test(event.target.value)) {
      setAge(event.target.value)
    }
  }
  
  const HandleGloveSubmit = (event) => {
    if (position.length !== 0 && age.length !== 0) {
      setIsLoading(true)
      axiosBaseURL.get("/calculater_api/glovesize/", {
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          position: position,
          age: age
        },
      }).then((response) => {
        setSize(response.data.size)
        setIsLoading(false)
      }).catch(function (error) {
        console.log(error)
        setIsLoading(false)
      });
    }
  };

  return (
    <Card className='generic-card h-100'>
      <Card.Header className='text-center generic-card-header'>
        <h4 className='card-name'>Glove Calculator</h4>
      </Card.Header>
      <Card.Body className='text-center justify-content-center'>
        <Form>
          <Row className='text-center justify-content-center input-row-top'>
            <input type="text" value={age} name='age' onChange={HandleAgeChange} onKeyDown={HandleBackSpace} className="form-control text-center text-light card-input w-50" placeholder="Age" />
          </Row>
          <Row className='text-center justify-content-center input-row-bottom '>
            <select value={position} onChange={HandleSelect} className="form-control form-select text-center text-light card-input w-50" id="inlineFormCustomSelect">
              <option value="" disabled selected hidden={true}>Position</option>
              <option value="outfield">Outfield</option>
              <option value="infield">Infield</option>
              <option value="1st base">1st base</option>
            </select>
          </Row>
        </Form>
        <Container className='card-reply-row text-center'>
          <Col className='pb-4'>
            {size.length !== 0 && <p className='reply-text'><b>{size}"</b></p>}
          </Col>
        </Container>
        <Row className='text-center justify-content-center'>
          <Col className='card-btn-col'>
            {isLoading ? <LoadIcon /> : <Button onClick={HandleGloveSubmit} className='get-button'>Calculate</Button>}
          </Col>
        </Row>
      </Card.Body>
    </Card >
  );
}

export default GloveCalc