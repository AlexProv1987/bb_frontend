
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <Container fluid ='true' className='stuck-element'>
        <footer className="py-4 text-white stuck-element">
                <Row xs='auto' className="justify-content-center">
                   <a className="footer-link text-wrap" target="_blank" rel="noopener noreferrer" href="https://procarnsolutions.com/">Baseball Oracle℠ © 2021 ProCarn Solutions</a>
                </Row>
        </footer>
        </Container>
    );
}
export default Footer;