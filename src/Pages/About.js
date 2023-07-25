import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import AboutForm from '../Components/AboutForm';
const About = () => {
    return (
        <Container fluid='true' className='main-container pt-2'>
            <Container style={{paddingTop:'60px', paddingBottom:'20px'}}>
                <Row className='d-flex text-center'>
                    <Col>
                        <h2 style={{ color: '#a42f2c', fontWeight:'bold'}}>About Us</h2>
                    </Col>
                </Row>
            </Container>
            <Container fluid='true' style={{paddingTop:'20px', paddingBottom:'20px', paddingLeft:'15px', paddingRight:'15px'}}>
                <Row className='text-center justify-content-center'>
                    <Col md={10} xl={8} sm={6}>
                        <p className='text-wrap' style={{fontSize:'18px',textAlign:'left'}}>
                            Baseball Oracle℠ is an AI-powered platform that guides the next generation of baseball parents, coaches,
                            and players online by answering <u>EVERY</u> baseball question. Not only does our
                            website answer questions but it lowers major barriers new athletes face. Specifically,
                            finding the right equipment and a league to play in. Our bat calculator and glove calculator
                            generate the best specifications for a player's needs and then show them a product that fits those needs.
                            Our league finder...well that finds a league near you!
                        </p>
                    </Col>
                </Row>
                </Container>
                <Container fluid='true' style={{paddingTop:'40px', paddingBottom:'20px', paddingLeft:'15px', paddingRight:'15px'}}>
                <Row className='text-center justify-content-center'>
                    <Col md={10} xl={8} sm={6}>
                    <p style={{textAlign:'left'}}><span style={{color:'#a42f2c', paddingRight:'10px',fontWeight:'bold',}}>Disclaimer:</span>Baseball Oracle℠ provides general guidelines for baseball rules and regulations but does not have specific rules for your league.</p>
                    </Col>
                </Row>
                </Container>
                <AboutForm />
            </Container>
    );
}

export default About;