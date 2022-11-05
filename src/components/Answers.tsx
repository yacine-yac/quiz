import {memo , useEffect, useState} from "react"; 
import { proposition as ze } from "./propositionModel";
type T_answers={ 
   propsition:{value:string,status:boolean},
   order:number,
   questionOrder:number,  
   handleProposition: (index:number,status:boolean)=>void
} 
function Answers({propsition,questionOrder,order,handleProposition}:T_answers){
   const ordonne: string[]=["A","B","C","D","E"]; 
   const ownHandler=():void=>{
      handleProposition(order,!propsition.status); 
   }
   //  console.log('allo');
   return  <>
            { 
                    
                    <li > 
                       <i>{ordonne[order]}</i>
                       <label  htmlFor={'ts-'+questionOrder+"-"+order }>
                        <input onChange={ownHandler}  
                           id={'ts-'+questionOrder+"-"+order} 
                           name={"err"+questionOrder}
                           value={order} 
                           checked={propsition.status} 
                           type="checkbox" 
                        />
                        {propsition.value}
                       </label> 
                    </li> 
               }
   </>
}
export default memo(Answers);