import React from 'react';
import { Container, Row, Col,Form } from 'react-bootstrap';
import {TiTick} from 'react-icons/ti'
const Fourthstep=()=>{
    return(
        <div>
           <Container>
                <div className='form_box'>
                    <div className={'circle_tick'}>
                        <div className={'circle_tick_card'}>
                            <span><TiTick /></span>
                        </div>
                    </div>
                    <div className='headings_container'>
                        <h1>Congratulations, Eren!</h1>
                        <h4>You have completed onboarding, you can start using eden!</h4>
                    </div>
                    <Form>
                        <Row>      
                            <Col sm={4}>
                            </Col>
                            <Col sm={4}>
                                
                                <button className='submit_button'>Launch Eden</button>
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
export default Fourthstep