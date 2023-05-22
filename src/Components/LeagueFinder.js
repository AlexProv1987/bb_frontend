import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Modal from 'react-modal';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axiosBaseURL from '../http';
import { faPhoneVolume, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import LoadIcon from './LoadingIcon';

const LeagueFinder = () => {
  const regex = /^[0-9\b]+$/;
  const [age, setAge] = useState('')
  const [zip, setZip] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [leagueOptions, setLeagueOptions] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  Modal.setAppElement("#root")

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#a42f2c',
    },
  };

  function closeModal() {
    setIsOpen(false);

  };

  const HandleBackSpace = (event) => {
    if (event.key === 'Backspace') {
      switch (event.target.name) {
        case 'age':
          if (age.length === 1) {
            setAge('')
          }
          return;
        case 'zip':
          if (zip.length === 1) {
            setZip('')
          }
          return;
        default:
          return;
      }
    }
  };

  const HandleChange = (event) => {
    if (regex.test(event.target.value)) {
      switch (event.target.name) {
        case 'age':
          setAge(event.target.value)
          return;
        case 'zip':
          setZip(event.target.value)
          return;
        default:
          return;
      }
    }
  };

  const HandleLeagueSubmit = (event) => {
    if (zip.length !== 0 && age.length !== 0) {
      setIsLoading(true)
      axiosBaseURL.get("/league_api/findleague/", {
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          zip: zip,
          age: age
        },
      }).then((response) => {
        setIsLoading(false)
        setIsOpen(true)
        console.log(response.data)
        setLeagueOptions(response.data.places)
      }).catch(function (error) {
        setIsLoading(false)
        console.log(error)
      });
    }
  };

  return (
    <Container className='h-100 league'>
      <Modal isOpen={isOpen}
        style={customStyles}>
        <Card className='generic-card h-100 league'>
          <Card.Header className='generic-card-header'>
            <h4 className='card-name'>Leagues Within 25 Miles</h4>
          </Card.Header>
          <Container fluid='true'><hr /></Container>
          <Card.Body>
            {leagueOptions.length !== 0 ? leagueOptions.map((item, index) => (
              <Container className='p-2' key={index}>
                <Row>
                  <Col><b>{item.name}</b></Col>
                </Row>
                <Row >
                  <Col><b>{item.address}</b></Col>
                </Row>
                <Row>
                  <Col><a className="text-decoration-none text-dark" href={"tel:"+item.phone}><FontAwesomeIcon icon={faPhoneVolume} /> <b>{item.phone}</b></a></Col>
                </Row>
                <Row>
                  <Col><a className="text-decoration-none text-dark" href={item.website} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGlobe} style={{color: "#000000",}} /> <b>{item.website}</b></a></Col>
                </Row>
              </Container>
            )) : <Container className='p-2'>
              <Row>
                <Col><b>We are sorry, it appears there are no leagues in your area.</b></Col>
              </Row>
            </Container>}
          </Card.Body>
          <Container fluid='true'><hr /></Container>
          <Container>
            <Row className='pt-2 text-center'>
              <Col className='pb-4'>
                <button className='get-button' onClick={closeModal}>Close</button>
              </Col>
            </Row>
          </Container>
        </Card>
      </Modal>

      <Card className='generic-card h-100'>
        <Card.Header className='generic-card-header text-center'>
          <h4 className='card-name'>League Finder</h4>
        </Card.Header>
        <Card.Body>
          <Form>
            <Row className='text-center justify-content-center input-row-top'>
              <input type="text" onChange={HandleChange} onKeyDown={HandleBackSpace} value={age} name='age' className="form-control text-center text-light card-input w-50" placeholder="Age" />
            </Row>
            <Row className='text-center justify-content-center input-row-bottom'>
              <input type="text" onChange={HandleChange} onKeyDown={HandleBackSpace} value={zip} name='zip' className="form-control text-center text-light card-input w-50" placeholder="Zip" />
            </Row>
          </Form>
          <Row className='card-reply-row'>
            <p className='reply-text'></p>
          </Row>
          <Row className='text-center justify-content-center'>
            <Col className='card-btn-col'>
              {isLoading ? <LoadIcon /> : <Button onClick={HandleLeagueSubmit} className='get-button'>Find League</Button>}

            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>

  );
}

export default LeagueFinder