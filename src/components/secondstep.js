import React from 'react';
import { Container, Row, Col,Form } from 'react-bootstrap';

const Secondstep=()=>{
    return(
        <div>
            <Container>
                <div className='form_box'>
                    <div className='headings_container'>
                        <h1>Let's set up a home for all your work</h1>
                        <h4>You can also create another Workspace later.</h4>
                    </div>
                    <Form>
                        <Row>
                            <Col sm={4}>
                            </Col>
                            <Col sm={4}>
                                <Form.Group  className='mb-3'>
                                    <Form.Label>Workspace Name</Form.Label>
                                    <Form.Control type='text' className='form_input' placeholder='Steve Jobs'/>
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Workspace URL <span>(optional)</span></Form.Label>
                                    <Row> 
                                        <Col sm={4}>
                                            <Form.Control type='text' className='form_input' placeholder='www.eden.com/' disabled/>
                                        </Col>  
                                        <Col sm={8}>
                                            <Form.Control type='text' className='form_input' placeholder='Steve'/>
                                        </Col>                                
                                    </Row>
                                </Form.Group>
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
export default Secondstep