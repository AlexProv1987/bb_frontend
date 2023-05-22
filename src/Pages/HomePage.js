import Question from '../Components/Question'
import BatCalc from '../Components/BatCalc';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import GloveCalc from '../Components/GloveCalc';
import LeagueFinder from '../Components/LeagueFinder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'
const HomePage = () => {
    return (
        <Container fluid='true' className='main-container pt-2'>
            <Question />
            <Container fluid='true' className='card-container h-100'>
                <Container fluid='true' className='justify-content-center'>
                    <Row className='text-center text-white pt-3'>
                        <Col>
                        <h3><b>Leagues & Calculators</b></h3>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className='justify-content-center'>
                        <Col xs={12} sm={12} md={12} lg={4} xl={4} className='card-column'>
                            <BatCalc />
                        </Col >
                        <Col xs={12} sm={12} md={12} lg={4} xl={4} className='card-column'>
                            <GloveCalc />
                        </Col >
                        <Col xs={12} sm={12} md={12} lg={4} xl={4} className='card-column'>
                            <LeagueFinder />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </Container>
    );
}

export default HomePage;