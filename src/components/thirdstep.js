import React from 'react';
import { Container, Row, Col,Form } from 'react-bootstrap';
import {FaUserAlt, FaUsers} from 'react-icons/fa'

const Thirdstep=()=>{
    return(
        <div>
           <Container>
                <div className='form_box'>
                    <div className='headings_container'>
                        <h1>How are you planning to use Eden?</h1>
                        <h4>We'll streamline your setup experience accordingly.</h4>
                    </div>
                    <Form>
                        <Row>
                            <Col sm={4}>
                            </Col>
                            <Col sm={4}>
                                <div className='card_box'>
                                    <Row>
                                        <Col sm={6}>
                                            <div className='card'>
                                                <span><FaUserAlt /></span>
                                                <h6>For myself</h6>
                                                <p>Write better. Think more clearly. Stay Organized</p>
                                            </div>
                                        </Col>
                                        <Col sm={6}>
                                            <div className='card'>
                                                <span><FaUsers /></span>
                                                <h6>With my team</h6>
                                                <p>Wikis, docs, tasks & projects, all in one place.</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <button className='submit_button'>Create Workspace</button>
                            </Col>
                            <Col sm={4}>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Container>
        </div>
    )
}
export default Thirdstep