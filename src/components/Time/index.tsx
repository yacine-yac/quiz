import React, {  useEffect,memo } from "react";
import './index.css';
function Time({setTime,time}:{setTime :React.Dispatch<React.SetStateAction<number>>,time:number}){
    const _formater=(r:number):string=>{
      const countMinut=Math.floor(r/60);
      const countSecond=Math.floor(r%60);
      return `${countMinut>0 ? countMinut >9? countMinut : "0"+countMinut : "00"}:${countSecond>0  ? countSecond>9 ? countSecond : "0"+countSecond : "00" }`;
    };
    /*eslint-disable */  
    useEffect(()=>{ 
          const rf= setInterval(()=>{
            time >0 && setTime(prev=>prev-1);
            
          },1000)
          time==0 && clearInterval(rf); 
    return ()=>clearInterval(rf);
    },[time]);
   
    return <>
       <div className="box-time direction-r-t center"> 
        { time >=0 
            ?  <p className={ (time<5 && time!==0) ? "p-time alert-time" :"p-time" }>{_formater(time)}</p>
            : <div className="skeleton skeleton-time"></div> 
        } 
       </div>
    </>
}
export default memo(Time);