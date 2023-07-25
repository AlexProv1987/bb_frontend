import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import LoadingIcon from '../Components/LoadingIcon';
import axiosBaseURL from '../http';
import FormSuccess from './FormSuccess';
const AboutForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [emailprimary, setEmailPrimary] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const SubmitForm = (e) => {
        if (email.length > 0 && name.length > 0 && message.length <= 255 && emailprimary.length === 0) {
            setLoading(true)
            axiosBaseURL.post("/form_api/submit/",{
                form_type:'sponsor',
                submitter_email:email,
                submitter:name,
                submitter_message:message
            }).then(function (response){
                setLoading(false)
                setSubmitted(true)
            }).catch(function (error) {
                setLoading(false)
            });
        }
    };

    const HandleTextChange = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmail(e.target.value)
                return;
            case 'name':
                setName(e.target.value)
                return;
            case 'message':
                setMessage(e.target.value)
                return;
            case 'emailprimary':
                setEmailPrimary(e.target.value)
                return;
            default:
                return;
        };
    };

    return (
        <Container style={{ paddingTop: '90px' }}>
            <Container>
                <Row className='d-flex text-center'>
                    <Col>
                        <h3 style={{ color: '#a42f2c', fontWeight: 'bold',}}>Do you want to be a sponsor?</h3>
                    </Col>
                </Row>
            </Container>
            {!submitted ?
                <Form>
                    <Row className='justify-content-around' style={{ paddingTop: '60px' }}>
                        <Col md={4} className='text-center mb-3'>
                            <input
                                type="text"
                                required
                                maxLength={50}
                                onChange={HandleTextChange}
                                value={name}
                                name='name'
                                className="about-form-field"
                                placeholder="Name..." />
                                <input 
                                type='text'
                                maxLength={50}
                                hidden={true}
                                onChange={HandleTextChange}
                                value={emailprimary}
                                name='emailprimary'/>
                        </Col>
                        <Col md={4} className='text-center'>
                            <input
                                type="email"
                                required
                                maxLength={254}
                                onChange={HandleTextChange}
                                value={email}
                                name='email'
                                className="about-form-field"
                                placeholder="Email.." />
                        </Col>
                    </Row>
                    <Row className='justify-content-center' style={{ paddingTop: '50px' }}>
                        <Col md={8} className='text-center'>
                            <input
                                type="text"
                                maxLength={255}
                                value={message}
                                onChange={HandleTextChange}
                                name='message'
                                className="about-form-field"
                                placeholder="Message.." />
                        </Col>
                    </Row>
                    <Row className='text-center mb-3' style={{ paddingTop: '60px' }}>
                        <Col>
                            {loading ? <LoadingIcon height='30' width='30' /> : <Button type='submit' className='get-button' onClick={SubmitForm}>Send</Button>}
                        </Col>
                    </Row>
                </Form>
                : <FormSuccess message='Thank you for your interest in becoming a sponsor, you will hear back from us shortly!' />}
        </Container>
    );
}
export default AboutForm;