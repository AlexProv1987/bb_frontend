import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
const AboutForm = () => {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const SubmitForm = (e) =>{
        e.preventDefault()
    };

    const HandleTextChangeTest = (e) =>{
        setEmail(e.target.value)
    };

    const HandleTextChangeTesttwo = (e) =>{
        setMessage(e.target.value)
    };

    return (
        <Container style={{paddingTop:'90px'}}>
            <Container>
                <Row className='d-flex text-center'>
                    <Col>
                        <h3 style={{color:'#a42f2c',fontWeight:'bold', fontFamily: 'Bradley Hand, cursive'}}>Do you want to be a sponsor?</h3>
                    </Col>
                </Row>
            </Container>
                <Form>
                    <Row className='justify-content-center' style={{paddingTop:'60px'}}>
                    <Col lg={4} className='text-center'  style={{paddingRight:'10px'}}>
                            <input 
                            type="text" 
                            required 
                            onChange={HandleTextChangeTest}
                            value={email}
                            name='name' 
                            className="about-form-field"
                            placeholder="Name..." />
                        </Col>
                        <Col lg={4} className='text-center' style={{paddingLeft:'10px'}}>
                            <input 
                            type="email" 
                            required 
                            onChange={HandleTextChangeTest}
                            value={email}
                            name='email' 
                            className="about-form-field"
                            placeholder="Email.." />
                        </Col>
                    </Row>
                    <Row className='justify-content-center' style={{paddingTop:'60px'}}>
                    <Col lg={8} className='text-center'>
                            <input 
                            type="text" 
                            required 
                            value={message} 
                            onChange={HandleTextChangeTesttwo}
                            name='message' 
                            className="about-form-field text-center" 
                            placeholder="Message.." />
                        </Col>
                    </Row>
                    <Row className='text-center' style={{paddingTop:'60px'}}>
                        <Col>
                        <Button className='get-button' type='submit'>Submit</Button>  
                        </Col>
                    </Row>
                </Form>
        </Container>
    );
}
export default AboutForm;