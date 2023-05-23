import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Nav';
const NavBar = () => {
    return (          
        <Navbar className='sticky-top justify-content-center text-center text-nowrap stuck-element' expand="lg">
            <Row className="mt-3">
               <Col className='p-1'><p>Supported By</p></Col>
               <Col className='p-1'><img src="./sponsor2.svg" width='60' height='30' className="rounded sponsor-img" alt="rawl"/></Col>
               <Col className='p-1'><img src="./sponsor3.svg" width='60' height='30' className="rounded sponsor-img" alt="df"/></Col>
            </Row>
            </Navbar>
    );
}
export default NavBar;