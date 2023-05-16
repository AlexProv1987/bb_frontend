import Question from '../Components/Question'
import BatCalc from '../Components/BatCalc';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import GloveCalc from '../Components/GloveCalc';
import LeagueFinder from '../Components/LeagueFinder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
const HomePage = () => {
    return (
        <Container fluid='true' className='main-container pt-4'>
            <Question />
            <Container fluid='true' className='page-break-container'>
                <svg xmlns="http://www.w3.org/2000/svg" id="bigTriangleUp" fill='white' version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <g>
                    <text startOffset='50%' textAnchor='middle' fontFamily="Verdana" fontSize="35" fill="blue">Hello</text>
                    <path d="M0 0 H100 V100 L50 0 L0 100 V0 Z" />
                    </g>
                 </svg>
            <Container fluid='true' className='m-0 p-0'>
            <Row className='text-center text-white'>
            <Col>
            <FontAwesomeIcon icon={faArrowDown} size="2xl"/>
            </Col>
            </Row>
            <Row className='text-center text-white'>
                <Col>
                <h4>Calculators & Local Leagues</h4>
                </Col>
            </Row>
        </Container>
            </Container>
            <Container fluid='true' className='card-container h-100'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col sm={4} md={4} lg={4} className='card-column'>
                            <BatCalc />
                        </Col >
                        <Col sm={4} md={4} lg={4} className='card-column'>
                            <GloveCalc />
                        </Col >
                        <Col sm={4} md={4} lg={4} className='card-column'>
                            <LeagueFinder />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </Container>
    );
}

export default HomePage;