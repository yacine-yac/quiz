import React from "react";
import "./index.css"; 
import { T_area } from "../Area";
function Demo({nextPage}:{nextPage:React.Dispatch<React.SetStateAction<T_area>>}){
   const handleSubmit=()=>{nextPage({page:3});}
   const handleBack=()=>{nextPage(prev=>{return {...prev, page:1} });}
    return <>
    <div className='box-1 center-block'>
         <div className="box-1-1 center-block center">
            <div className="box-3  ">
               <h1>Do you want submit.</h1> 
               <button onClick={handleBack} className="btn">Go Back</button>
               <button onClick={handleSubmit} className="btn btn-active">Submit</button>
            </div> 
         </div>
    </div>
    </>
}
export default Demo;