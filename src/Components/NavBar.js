import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
      <Navbar collapseOnSelect expand="lg" className="sticky-top justify-content-center text-center text-nowrap stuck-element">
      <Container fluid={true}>
        <Navbar.Brand>
        <img
              src="./icon_white.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav navbar-light bg-light"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" style={{color:'white', fontSize:'20px'}} className='nav-page-link'>Home</Nav.Link>
            <Nav.Link  as={Link} to="/about" style={{color:'white', fontSize:'20px'}} className='nav-page-link'>About</Nav.Link>
            <NavDropdown title={<span className="my-auto nav-page-link" style={{color:'white', fontSize:'20px'}}>Rule Books</span>} id="basic-nav-dropdown" style={{fontSize:'20px'}}>
              <NavDropdown.Item className='text-light bg-transparent book-item' target="_blank" rel="noopener noreferrer" href="https://www.littleleague.org/playing-rules/little-league-rulebook-app/">Little League International</NavDropdown.Item>
              <NavDropdown.Item className='text-light bg-transparent book-item' target="_blank" rel="noopener noreferrer" href="https://www.usssa.com/baseball/baseball-rules">USSSA</NavDropdown.Item>
              <NavDropdown.Item className='text-light bg-transparent book-item' target="_blank" rel="noopener noreferrer" href="https://www.nfhs.org/activities-sports/baseball/">NFHS</NavDropdown.Item>
              <NavDropdown.Item className='text-light bg-transparent book-item' target="_blank" rel="noopener noreferrer" href="https://www.ncaapublications.com/c-66-baseball.aspx">NCAA</NavDropdown.Item>
              <NavDropdown.Item className='text-light bg-transparent book-item' target="_blank" rel="noopener noreferrer" href="https://www.mlb.com/official-information">MLB</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Row>
              <Col>
            <Nav.Link href="https://www.linkedin.com/company/79371156/admin/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} size="xl"/></Nav.Link>
            </Col>
            <Col>
            <Nav.Link href="https://www.facebook.com/BsblOracle" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} style={{color: "#ffffff",}} size="xl"/></Nav.Link>
            </Col>
            <Col>
            <Nav.Link href="https://twitter.com/BsblOracle" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff",}} size="xl"/></Nav.Link>
            </Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}
export default NavBar;