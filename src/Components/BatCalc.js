import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axiosBaseURL from '../http';
import { GetIntenger, ArraySum, ConvertUnitOfMeasure, CheckNumber } from '../Helpers/helpers'
import LoadIcon from './LoadingIcon';
import ProductModal from "./ProductModal";
const BatCalc = () => {
    const regex = /^[' 0-9\b]+$/;
    const [weight, setWeight] = useState("")
    const [height, setHeight] = useState("")
    const [age, setAge] = useState("")
    const [reply, setReply] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const HandleBackSpace = (event) => {
        if (event.key === 'Backspace') {
            switch (event.target.name) {
                case 'height':
                    setHeight("")
                    return;
                case 'weight':
                    if (weight.length === 1) {
                        setWeight("")
                    }
                    return;
                case 'age':
                    if (age.length === 1) {
                        setAge("")
                    }
                    return;
                default:
                    return;
            };
        };
    };

    const HandleTextChange = (event) => {
        switch (event.target.name) {
            case 'height':
                if (height.length === 0) {
                    if (regex.test(event.target.value)) {
                        setHeight(event.target.value + "'")
                    }
                }
                else {
                    if (regex.test(event.target.value) && height.length <= 3) {
                        setHeight(event.target.value)
                    }
                }
                return;
            case 'weight':
                if (regex.test(event.target.value)) {
                    setWeight(event.target.value);
                }
                return;
            case 'age':
                if (regex.test(event.target.value)) {
                    setAge(event.target.value);
                }
                return;
            default:
                return;
        };
    };

    const HandleBatSubmit = (event) => {
        if (weight.length !== 0 && height.length !== 0 && age.length !== 0) {
            setIsLoading(true)
            let convertedHeight = GetHeight(height)
            axiosBaseURL.get("/calculater_api/batsize/", {
                headers: {
                    'Content-Type': 'application/json',
                },
                params: {
                    weight: weight,
                    height: convertedHeight,
                    age:age
                },
            }).then((response) => {
                setReply(response.data)
                setIsLoading(false)
            }).catch(function (error) {
                setIsLoading(false)
                setReply("Please Try Again...")
            });
        };
    };

    const GetHeight = (value) => {
        let height = 0
        let ft = GetIntenger("'", value, 0)
        let convertedFt = ConvertUnitOfMeasure(ft, 12)
        let validInches = CheckNumber(GetIntenger("'", value, 1), 11)
        height = ArraySum([convertedFt, validInches], 0)
        return height;
    }

    return (
        <Card className='generic-card h-100 shadow-lg'>
            <Card.Header className='text-center generic-card-header'>
                <h4 className='card-name'>Bat Calculator</h4>
            </Card.Header>
            <Container fluid='true'><hr style={{border:'1px solid #a42f2c'}} /></Container>
            <Card.Body className='justify-content-center text-center'>
                <Form>
                    <Row className='text-center justify-content-center input-row-top pb-4'>
                        <input
                            type="text"
                            required
                            onKeyDown={HandleBackSpace}
                            value={age}
                            onChange={HandleTextChange}
                            name='age'
                            className="form-control card-input text-white text-center w-50"
                            placeholder="Age" />
                    </Row>
                    <Row className='text-center justify-content-center pb-4'>
                        <input type="text"
                            required
                            onKeyDown={HandleBackSpace}
                            value={height}
                            onChange={HandleTextChange}
                            name='height'
                            className="form-control card-input text-white text-center w-50"
                            placeholder="Height" />

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
                            placeholder="Weight" />
                    </Row>
                    <Container className='card-reply-row text-center'>
                        <Col className='pb-4'>
                            {reply.length !== 0 && isNaN(reply.bat_size) && !isLoading ? <p className='reply-text'><b>No size found. Please ask Coach</b></p> : !isLoading && reply.length !== 0 && <ProductModal
                                size={reply.bat_size}
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
                            {isLoading ? <LoadIcon /> : <Button type="submit" onClick={HandleBatSubmit} className='get-button'>Calculate</Button>}
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default BatCalc