import Component from '../components'; 
import Result from '../result';
import Demo from '../demo'; 
import { useState } from 'react';
function Area(){
      const [step,setStep]=useState< 1| 2 |3 >(1);
    return <>
       {step==1 && <Component nextPage={setStep} />}
       {step==2 && <Demo nextPage={setStep}/>}  
       {step==3 &&  <Result nextPage={setStep} />}
    </>
}
export default Area;