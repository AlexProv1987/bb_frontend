import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons'
const FormSuccess = (props) => {
    return (
        <Container className='text-center' style={{ paddingTop: '60px', paddingBottom: '50px' }}>
            <Row className='justify-content-center'>
                <Col md={10} xl={8} sm={6}>
                    <p className='text-wrap' style={{ fontSize: '20px', fontFamily: 'Bradley Hand, cursive'}}>
                        <span style={{paddingRight:'10px'}}><FontAwesomeIcon icon={faCheck} size="2xl" style={{color:'#49c328',}}/></span>{props.message}
                    </p>
                </Col>
            </Row>
        </Container>
    )
};
export default FormSuccess