import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import axiosBaseURL from '../http';
import LoadIcon from './LoadingIcon';
const Question = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
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
                console.log(error)
            });
        }
    };
    const FormSubmit = (event) => {
        if(event.key === 'Enter' && question.length !== 0 && question.length <= 75){
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
                console.log(error)
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
                        <Row className='pb-2 text-center'>
                            <Col>
                                <h6><b><i>Answering <u>EVERY</u> Baseball Question</i></b></h6>
                            </Col>
                        </Row>
                    </Container>
                    <div className="container container-fluid">
                        <div className="row height justify-content-center align-items-center">
                            <div className="col-md-6">
                                <div className="form" onKeyDown={FormSubmit}>
                                    <input type="text" id='input-question' value={question} onChange={QTextChange} name='question' className="form-control form-input search-gpt" placeholder="Ask Coach..." />
                                    <span><button onClick={HandleQuestionSubmit} className='search-btn pl-4'><FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" style={{ color: "#ffffff", }} /></button></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Container className='reply-row'>

                        {isLoading && <LoadIcon />}
                        {answer.length !== 0 && <Row className='text-center'><Col className='text-wrap'><h5><b>{answer}</b></h5></Col></Row>}

                    </Container>
                </Col>
            </Row>
        </Container>
    );
}
export default Question;