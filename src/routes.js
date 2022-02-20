import { Routes, Route} from 'react-router-dom'
import Firststep from './components/firststep'
import Secondstep from './components/secondstep'
import Thirdstep from './components/thirdstep'
import Fourthstep from './components/fourthstep'
const FormRoutes=(props)=>{
    const ROUTES=[
        {path:'/', exact:true, component:Firststep },
        {path:'/step1',exact:true, component:Firststep},
        {path:'/step2' ,exact:true, component:Secondstep},
        {path:'/step3' ,exact:true, component:Thirdstep},
        {path:'/step4' ,exact:true, component:Fourthstep},
    ]
    return(
            <Routes>
                {ROUTES.map((obj,index)=>{
                    return(<Route key={index} path={obj.path} exact={obj.exact} element={<obj.component />} />)
                })}
            </Routes>
    )
}
export default FormRoutes