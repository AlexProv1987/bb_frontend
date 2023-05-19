import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axiosBaseURL from '../http';
const BatCalc = () => {
    const regex = /^[0-9\b]+$/;
    const [weight, setWeight] = useState("")
    const [height, setHeight] = useState("")
    const [size, setSize] = useState("")


    const HandleBackSpace = (event) => {
        if (event.key === 'Backspace') {
            switch (event.target.name) {
                case 'height':
                    if (height.length === 1) {
                        setHeight('')
                    }
                    return;
                case 'weight':
                    if (weight.length === 1) {
                        setWeight('')
                    }
                    return;
                default:
                    return;
            };
        };
    };

    const HandleTextChange = (event) => {

        if (regex.test(event.target.value)) {
            switch (event.target.name) {
                case 'height':
                    setHeight(event.target.value)
                    return;
                case 'weight':
                    setWeight(event.target.value)
                    return;
                default:
                    return;

            };
        };
    };
    const HandleBatSubmit = (event) => {
        if (weight.length !== 0 && height.length !== 0) {
            axiosBaseURL.get("/calculater_api/batsize/", {
                headers: {
                    'Content-Type': 'application/json',
                },
                params: {
                    weight: weight,
                    height: height
                },
            }).then((response) => {
                setSize(response.data.bat_size)

            }).catch(function (error) {
                console.log(error)
            });
        };
    };

    return (
        <Card className='generic-card h-100'>
            <Card.Header className='text-center generic-card-header'>

                <h4 className='card-name'>Bat Calculator</h4>
            </Card.Header>
            <Card.Body className='justify-content-center text-center'>
                <Form>
                <Row className='text-center justify-content-center input-row-top'>
                                <input type="text" 
                                required  
                                onKeyDown={HandleBackSpace} 
                                value={height} 
                                onChange={HandleTextChange} 
                                name='height' 
                                className="form-control card-input text-white text-center w-50" 
                                placeholder="Height Ft" />
                    </Row>
                    <Row className='text-center justify-content-center input-row-bottom'>
                                <input 
                                type="text" 
                                required 
                                onKeyDown={HandleBackSpace} 
                                value={weight} 
                                onChange={HandleTextChange} 
                                name='weight' 
                                className="form-control card-input text-white text-center w-50" 
                                placeholder="Weight Lb" />
                    </Row>  
                    </Form>
                <Container className='card-reply-row text-center'>
                    <Col className='pb-4'>
                        {size.length !== 0 && <p className='reply-text'><b>{size}</b></p>}
                    </Col>
                </Container>
                <Row className='text-center justify-content-center'>
                    <Col className='card-btn-col'>
                        <Button type="submit" onClick={HandleBatSubmit} className='get-button'>Calculate</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default BatCalc