 
import { T_area } from "../../Area";
import React, {  useEffect, useState,memo } from "react";
import './index.css';
function Time({setTime,time}:{setTime :React.Dispatch<React.SetStateAction<number>>,time:number}){
    const _formater=(r:number):string=>{
      const countMinut=Math.floor(r/60);
      const countSecond=Math.floor(r%60);
      return `${countMinut>0 ? countMinut >9? countMinut : "0"+countMinut : "00"}:${countSecond>0  ? countSecond>9 ? countSecond : "0"+countSecond : "00" }`;
    }; 
    useEffect(()=>{
      const rf= setInterval(()=>{
        time >0 && setTime(prev=>prev-1);
        
      },1000)
      time==0 && clearInterval(rf);
       return ()=> clearInterval(rf);
    },[time]); 
    return <>
       <div className="box-time direction-r-t center">
         <p className={`p-time ${(time<5 && time!==0) ? "alert-time" :""}`}  >{_formater(time)}</p>
       </div>
    </>
}
export default memo(Time);