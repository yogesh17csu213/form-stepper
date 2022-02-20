import '../css/stepper.css'
import { useState,useEffect } from 'react'
const Stepper = (props) => {
    
    const [activeState,setActiveState] = useState(props.activeState?props.activeState:0)
    
    const onClickStateChange=(key,obj)=>{
      props.onClickChange(key,obj)
    }
    
    useEffect(() => {
      if(props.activeStep){
        setActiveState(props.activeStep)
      }
    }, [props.activeStep])

  return (
    <div>
      <div className={'stepper_horizontal'}>
        {
          props.data.map((arr,key) => {
            return(
                  <div className={'TabCard'}>
                      <div className={'tab_box'}>
                        <span className={`${'tab_step'} ${(key===activeState)? `${'tab_step_active'}`:''} ${(key<activeState)?`${'completed'}`:''}`} onClick={()=> {onClickStateChange(key,arr);setActiveState(key)}}>{arr.title}</span>
                        { (key!==0)&&  <span className={`${'tab_line_left'} ${(key<=activeState)? `${'tab_line_active'}`:''}`}></span> }
                        { (key!==props.data.length-1)&&  <span className={`${'tab_line_right'}  ${(key<activeState)? `${'tab_line_active'}`:''}`}></span>}
                      </div>
                  </div>
          )})
        }
      </div>
    </div>
    )
}

export default Stepper;