import React, {useState, useEffect} from'react'
import {useNavigate } from 'react-router-dom'
import Stepper from './stepper'
import Eden from '../images/eden_icon.png';
import { Container } from 'react-bootstrap';
import {STEPPER_LIST} from '../constants'
const Layout=(props)=>{
  
    const [currentStep, setCurrentStep] = useState(0)
    const navigate=useNavigate()

    useEffect(()=>{
        STEPPER_LIST.find((obj,index)=>{
              if(window.location.pathname===obj.route){
                  setCurrentStep(index)
                
              }
          })
    },[])

    const handleClick=(key,obj) =>{
        setCurrentStep(key)
        if(obj.route){
            navigate(`${obj.route}`)
        }else{
            navigate('/')
        }        
    }

    return(
        <Container>
            <div className='content_container'>
                <h1><span><img src={Eden} alt='Eden Icon' /></span>Eden</h1>
                <Stepper data={STEPPER_LIST} activeStep={currentStep} onClickChange={(obj,arr)=>handleClick(obj,arr)}  />
                {props.children}    
            </div>
        </Container>
    )
}
export default Layout