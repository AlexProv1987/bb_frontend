import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import axiosBaseURL from '../http';
import { Text } from 'react-native';
import LoadIcon from './LoadingIcon';
const Question = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const QTextChange = (event) => {
        setQuestion(event.target.value);
    };

    const HandleQuestionSubmit = (event) => {
        setAnswer("Sure, here's a practice plan for the New Zealand Under-15 team:\n\n1. Warm-up: Start with a light jog and dynamic stretching to get the blood flowing and prevent injuries.\n2. Fielding drills: Focus on ground balls, pop-ups, and throwing accuracy.\n3. Batting practice: Work on hitting mechanics and timing, with a mix of live pitching and tee work.\n4. Pitching drills: Practice proper mechanics and work on different pitches.\n5. Base running: Practice stealing, sliding, and reading pitchers.\n6. Defensive scenarios: Work on situational plays, such as cutoffs and double plays.\n7. Scrimmage: Put everything together in a game-like setting.\n8. Cool-down: End with static stretching and a team huddle to review the practice and set goals for the next one."
        )
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
                    <div className="container container-fluid">
                        <div className="row height justify-content-center align-items-center">
                            <div className="col-md-6">
                                <div className="form" onKeyDown={FormSubmit}>
                                    <input type="text" id='input-question' value={question} onChange={QTextChange} name='question' className="form-control form-input search-gpt" placeholder="Ask Coach..." />
                                    <span><button type='submit' onClick={HandleQuestionSubmit} className='search-btn pl-4'><FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" style={{ color: "#ffffff", }} /></button></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Container className='reply-row'>
                        {isLoading && <LoadIcon />}
                        {answer.length !== 0 && <Row className='d-flex justify-content-center'><Col className='reply-column text-wrap d-flex justify-content-center' style={{alignSelf: 'flex-start'}}><Text style={{alignSelf: 'flex-start', justifyContent: 'center',fontSize:'20px', fontWeight:'bold'}}>{answer}</Text></Col></Row>}
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}
export default Question;