import React from 'react';
import { Container, Row, Col,Form } from 'react-bootstrap';

const Firststep=(props)=>{
    return(
        <div>    
            <Container>
                <div className='form_box'>
                    <div className='headings_container'>
                        <h1>Welcome! First things first...</h1>
                        <h4>You can always change them later.</h4>
                    </div>
                    <Form>
                        <Row>
                            <Col sm={4}>
                            </Col>
                            <Col sm={4}>
                                <Form.Group  className='mb-3'>
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type='text' className='form_input' placeholder='Steve Jobs'/>
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Display Name</Form.Label>
                                    <Form.Control type='text' className='form_input' placeholder='Steve'/>
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
export default Firststep