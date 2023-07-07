import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
const NavBar = () => {
    return (
        <Navbar className='sticky-top justify-content-center text-center text-nowrap stuck-element' expand="lg">
            <Row className="mt-3">
                    <Col className='px-2'><p>Supported By:</p></Col>
                    <Col><a  target="_blank" rel="noopener noreferrer" href='https://maruccisports.com/'><img src="./Marucci1.jpg" width='100' height='30' className="rounded sponsor-img" alt="Marucci"/></a></Col>
                 {/* 
                <Col className='p-1'><p><b>Follow Us</b></p></Col>
                <Col className='p-1'><a href="https://www.linkedin.com/company/79371156/admin/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} size="xl"/></a></Col>
                <Col className='p-1'><a href="https://www.facebook.com/BsblOracle" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} style={{color: "#ffffff",}} size="xl"/></a></Col>
                <Col className='p-1'><a href="https://twitter.com/BsblOracle" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff",}} size="xl"/></a></Col>
                */}
            </Row>
        </Navbar>
    );
}
export default NavBar;