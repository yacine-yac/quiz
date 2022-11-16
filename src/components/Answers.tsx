import {memo , useEffect, useState} from "react"; 
import { proposition as ze } from "./propositionModel";
type T_answers={ 
   propsition:{value:string,status:boolean},
   order:number,
   questionOrder:number,  
   mode:boolean;
   type:boolean;   // it refers to input type  true=> checkbox , false => radio
   handleProposition: (index:number,status:boolean)=>void
} 
function Answers({propsition,questionOrder,order,handleProposition,mode,type}:T_answers){
   const ordonne: string[]=["A","B","C","D","E"]; 
   const ownHandler=():void=>{
   //  type ?
      handleProposition(order,!propsition.status)
      // :null; 
   }
   //  console.log('allo',propsition.value);
   return  <>
            { 
                    
                    <li> 
                       <i>{ordonne[order]}</i>
                       <label htmlFor={'ts-'+questionOrder+"-"+order }>
                        <input onChange={ownHandler}  
                           id={'ts-'+questionOrder+"-"+order} 
                           name={"err"+questionOrder}
                           value={order} 
                           checked={propsition.status} 
                           type={type ? "checkbox" : "radio"} 
                           disabled={mode}
                           data-truth={(mode && propsition.status) ? 'true' : 'false'}
                        />
                        {propsition.value}
                       </label> 
                    </li> 
               }
   </>
}
export default  memo(Answers);