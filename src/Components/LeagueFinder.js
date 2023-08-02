import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Modal from 'react-modal';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axiosBaseURL from '../http';
import { faPhoneVolume, faGlobe, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { modalStyles } from '../Styles/ModalStyles'
import LoadIcon from './LoadingIcon';

const LeagueFinder = () => {
  const regex = /^[0-9\b]+$/;
  const [age, setAge] = useState('')
  const [zip, setZip] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [leagueOptions, setLeagueOptions] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  Modal.setAppElement("#root")

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
      if (errorMessage.length !== 0) {
        setErrorMessage("")
      }
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
        setLeagueOptions(response.data.places)
      }).catch(function (error) {
        if (error.response) {
          setErrorMessage(error.response.data.error)
          setIsLoading(false)
        }
      });
    }
  };

  return (
    <Container className='h-100 league'>

      <Modal isOpen={isOpen} style={modalStyles}>
        <Container className='d-flex align-items-end flex-column p-0'>
          <div className="mt-auto"><FontAwesomeIcon className='product-close-fa' onClick={closeModal} icon={faCircleXmark} size="xl" style={{ color: "#a42f2c", }} /></div>
        </Container>
        <Container className='product-header-container text-center'>
          <Row>
            <Col>
              <h4>Leagues Within 25 Miles</h4>
            </Col>
          </Row>
        </Container>
        <Container fluid='true'><hr style={{ border: '1px solid #a42f2c' }} /></Container>
        {leagueOptions.length !== 0 ? leagueOptions.map((item, index) => (
          <Container className='p-2' key={index}>
            <Row>
              <Col style={{fontSize:'18px'}}>{item.name}</Col>
            </Row>
            <Row >
              <Col>{item.address}</Col>
            </Row>
            <Row>
              <Col><a className="text-dark text-decoration-none" href={item.website} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGlobe}/> Website</a></Col>
            </Row>
            <Row>
              <Col><a className="text-decoration-none text-dark" href={"tel:" + item.phone}><FontAwesomeIcon icon={faPhoneVolume}/> {item.phone}</a></Col>
            </Row>
          </Container>
        )) : <Container className='p-2'>
          <Row>
            <Col><b>We are sorry, it appears there are no leagues in your area.</b></Col>
          </Row>
        </Container>}
        <Container fluid='true'><hr style={{ border: '1px solid #a42f2c' }} /></Container>
        <Container className='product-btn-container'>
          <Row className='text-center pb-4 pt-4'>
            <Col> <button className='get-button' onClick={closeModal}>Close</button></Col>
          </Row>
        </Container>
      </Modal>


      <Card className='generic-card h-100 shadow=lg'>
        <Card.Header className='generic-card-header text-center'>
          <h4 className='card-name'>League Finder</h4>
        </Card.Header>
        <Container fluid='true'><hr style={{ border: '1px solid #a42f2c' }} /></Container>
        <Card.Body>
          <Form>
            <Row className='text-center justify-content-center input-row-top'>
              <input type="text" required onChange={HandleChange} onKeyDown={HandleBackSpace} value={age} name='age' className="form-control text-center text-light card-input w-50" placeholder="Age" />
            </Row>
            <Row className='text-center justify-content-center input-row-bottom'>
              <input type="text" required onChange={HandleChange} onKeyDown={HandleBackSpace} value={zip} name='zip' className="form-control text-center text-light card-input w-50" placeholder="Zip" />
            </Row>
            <Container className='card-reply-row text-center'>
              <Col className='pb-4'>
                {errorMessage ? <p className='text-center'><b>{errorMessage}</b></p> : <p className='reply-text'></p>}
              </Col>
            </Container>
            <Row className='text-center justify-content-center'>
              <Col className='card-btn-col'>
                {isLoading ? <LoadIcon height='30' width='30' /> : <Button type='submit' onClick={HandleLeagueSubmit} className='get-button'>Find League</Button>}
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>

  );
}

export default LeagueFinder