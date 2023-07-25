import Modal from 'react-modal';
import {Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { modalStyles } from '../Styles/ModalStyles'
const ProductModal = (props) => {
    const [isOpen, setIsOpen] = useState(true)
    Modal.setAppElement("#root")
    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <Modal isOpen={isOpen} style={modalStyles}>
            <Container className='d-flex align-items-end flex-column p-0'>
                <div className="mt-auto"><FontAwesomeIcon className='product-close-fa' onClick={closeModal} icon={faCircleXmark} size="xl" style={{color: "#a42f2c",}} /></div>
            </Container>
            <Container className='product-header-container text-center'>
                <Row>
                    <Col>
                        <h4>Suggested Product</h4>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col sm={4} md={6}>
                        <h6>Size Range: {props.size}</h6>
                    </Col>
                    {props.extra && <Col sm={4} md={6}><h6>{props.extraName}: {props.extra}</h6></Col>}
                </Row>
            </Container>
            <Container fluid='true'><hr style={{border:'1px solid #a42f2c'}} /></Container>
            <Container className='product-img-container'>
                <Row className='justify-content-center'>
                    <Col className='text-center'>
                        <img className='product-img' src={props.img} alt='product-img' />
                    </Col>
                </Row>
            </Container>
            <Container fluid='true'><hr style={{border:'1px solid #a42f2c'}}/></Container>
            <Container className='product-info-container'>
                <Row>
                    <Col className='text-center'>
                        <p>{props.productName}</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center'>
                        <p>{props.vendor}</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center'> 
                        <p>{props.price}</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center'>
                        <p>{props.reviews}</p>
                    </Col>
                </Row>
            </Container>
            <Container className='product-btn-container'>
                <Row className='text-center pb-4 pt-4'>
                    <Col><a className="text-decoration-none text-light" href={props.url} target="_blank" rel="noopener noreferrer"><button className='get-button'>View</button></a></Col>
                </Row>
            </Container>
        </Modal>
    );
}
export default ProductModal