import Question from '../Components/Question'
import BatCalc from '../Components/BatCalc';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import GloveCalc from '../Components/GloveCalc';
import LeagueFinder from '../Components/LeagueFinder';
import PageBreak from '../imgs/pagebreak.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
const HomePage = () => {
    return (
        <Container fluid='true' className='main-container pt-4'>
            <Question />
            <Container fluid='true' className='page-break-wrapper'>
               <img src={PageBreak} alt='break'></img>
            </Container>
            <Container fluid='true' className='card-container h-100'>
                <Container fluid='true' className='justify-content-center'>
                <Row className='text-center text-white'>
                    <h4><b>Leagues & Calculators</b></h4>
                </Row>
                </Container>
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