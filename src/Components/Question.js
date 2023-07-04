import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import axiosBaseURL from '../http';
import { Text } from 'react-native';
import LoadIcon from './LoadingIcon';
import Paper from '../imgs/paper.jpg';
const Question = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const QTextChange = (event) => {
        setQuestion(event.target.value);
    };

    const HandleQuestionSubmit = (event) => {
        if (question.length !== 0 && question.length <= 75) {
            setAnswer('')
            setIsLoading(true)
            axiosBaseURL.get("/question_api/ask/", {
                headers: {
                    'Content-Type': 'application/json',
                },
                params: { question: question },
            }).then((response) => {
                setIsLoading(false)
                setAnswer(response.data.answer)
            }).catch(function (error) {
                setIsLoading(false)
                setAnswer("Our Coaches are very busy, please try again shortly.")
            });
        }
    };

    const FormSubmit = (event) => {
        if (event.key === 'Enter' && question.length !== 0 && question.length <= 75) {
            setAnswer('')
            setIsLoading(true)
            axiosBaseURL.get("/question_api/ask/", {
                headers: {
                    'Content-Type': 'application/json',
                },
                params: { question: question },
            }).then((response) => {
                setIsLoading(false)
                setAnswer(response.data.answer)
            }).catch(function (error) {
                setIsLoading(false)
                setAnswer("Our Coaches are very busy, please try again shortly.")
            });
        }
    };

    return (
        <Container className='text-center question-container' fluid='true'>
            <Row className='pt-4'>
                <Col>
                    <Container>
                        <Row className='justify-content-center m-auto'>
                            <Col>
                                <img src="./Logo.svg" className='search-logo-img' alt="logo" />
                            </Col>
                        </Row>
                        <Row className='pb-3 pt-3 text-center'>
                            <Col>
                                <h6><b><i>Answering <u>EVERY</u> Baseball Question</i></b></h6>
                            </Col>
                        </Row>
                    </Container>
                    <div className="container container-fluid pb-4">
                        <div className="row height justify-content-center align-items-center">
                            <div className="col-md-6">
                                <div className="form" onKeyDown={FormSubmit}>
                                    <input type="text" id='input-question' value={question} onChange={QTextChange} name='question' className="form-control form-input search-gpt" placeholder="Ask Coach..." />
                                    <span><button type='submit' onClick={HandleQuestionSubmit} className='search-btn pl-4'><FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" style={{ color: "#ffffff", }} /></button></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        isLoading ? <Container className='reply-row'><LoadIcon /></Container> :
                            answer.length !== 0 ? <Container className='reply-row' style={{ backgroundImage: `url(${Paper})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                                <Row className='d-flex justify-content-center reply-text'>
                                    <Col className='reply-column text-wrap d-flex justify-content-center' style={{ alignSelf: 'flex-start' }}>
                                        <Text style={{ alignSelf: 'flex-start', justifyContent: 'center', fontSize: '16px', fontFamily: 'Bradley Hand, cursive' }}>{answer}</Text>
                                    </Col>
                                </Row>
                            </Container> : <Container className='reply-row'></Container>
                    }
                </Col>
            </Row>
        </Container>
    );
}
export default Question;