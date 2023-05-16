
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <Container fluid ='true' className='stuck-element'>
        <footer className="py-4 text-white stuck-element">
                <Row xs='auto' className="justify-content-center">
                   <p>© 2021 Copyright: ProCarn Solutions</p>
                </Row>
        </footer>
        </Container>
    );
}
export default Footer;