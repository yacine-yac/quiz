 
 
import {  useEffect, useState,memo } from "react";
import {time} from "./configTime";
import './index.css';
function Time(){
    const _formater=(r:number):string=>{
      const countMinut=Math.floor(r/60);
      const countSecond=Math.floor(r%60);
      return `${countMinut>0 ? countMinut >9? countMinut : "0"+countMinut : "00"}:${countSecond>0  ? countSecond>9 ? countSecond : "0"+countSecond : "00" }`;
    };
    const [state,setState]=useState<number>(time);  
    
    useEffect(()=>{
      const rf= setInterval(()=>{
        state >0 && setState(prev=>prev-1);
        
      },1000)
      state==0 && clearInterval(rf);
       return ()=> clearInterval(rf);
    },[state]); 
    return <>
       <div className="box-time direction-r-t center">
         <p className={`p-time ${(state<5 && state!==0) ? "alert-time" :""}`}  >{_formater(state)}</p>
       </div>
    </>
}
export default memo(Time);