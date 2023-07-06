import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import axiosBaseURL from '../http';
import Container from 'react-bootstrap/esm/Container';
import LoadIcon from './LoadingIcon';
import ProductModal from "./ProductModal";
const GloveCalc = () => {

  const regex = /^[0-9\b]+$/;
  const [position, setPosition] = useState('');
  const [age, setAge] = useState('')
  const [reply, setReply] = useState('')
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
        setReply(response.data)
        setIsLoading(false)
      }).catch(function (error) {
        setReply("Please try Again..")
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
            <input type="text" required value={age} name='age' onChange={HandleAgeChange} onKeyDown={HandleBackSpace} className="form-control text-center text-light card-input w-50" placeholder="Age" />
          </Row>
          <Row className='text-center justify-content-center input-row-bottom '>
            <select value={position} onChange={HandleSelect} required className="form-control form-select text-center text-light card-input w-50" id="inlineFormCustomSelect">
              <option value="" disabled selected hidden={true}>Position</option>
              <option value="outfield">Outfield</option>
              <option value="infield">Infield</option>
              <option value="1st base">1st base</option>
              <option value="catcher">Catcher</option>
            </select>
          </Row>
        <Container className='card-reply-row text-center'>
          <Col className='pb-4'>
            {reply.size === 'none found' ? <p className='reply-text'><b>No size found. Please ask Coach</b></p> : !isLoading && reply.length !==0 && <ProductModal 
                                                size={reply.size} 
                                                productName={reply.product.product_name} 
                                                url={reply.product.product_url} 
                                                img={reply.product.product_img}
                                                vendor={reply.product.product_vendor}
                                                price={reply.product.product_price}
                                                reviews={reply.product.product_reviews}
                                                />}
          </Col>
        </Container>
        <Row className='text-center justify-content-center'>
          <Col className='card-btn-col'>
            {isLoading ? <LoadIcon /> : <Button type='submit' onClick={HandleGloveSubmit} className='get-button'>Calculate</Button>}
          </Col>
        </Row>
        </Form>
      </Card.Body>
    </Card >
  );
}

export default GloveCalc