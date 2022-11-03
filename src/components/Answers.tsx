import { T_handleAnswer,T_reducer ,T_proposition} from "./type";
import {memo , useEffect, useState} from "react"; 
type topl=React.Dispatch<{
   type: "setStatus" | "add";
   payload: {
       data?: any;
       setter?: {
           boxOrder: number;
           status: boolean;
       } | undefined;
   };
}>
type T_answers={ 
   propsition:{value:string,status:boolean},
   order:number,
   questionOrder:number, 
   handleAnswers:(e:number)=>void,
   setProposition:topl
} 

function Answers({propsition,questionOrder,order,handleAnswers,setProposition}:T_answers){
   const ordonne: string[]=["A","B","C","D","E"]; 
   const [stateOwn,setStateOwn]=useState<boolean>(propsition.status);
   useEffect(()=>{
      setStateOwn(propsition.status);
         
   },[propsition]);

   const ownHandler=():void=>{
      setProposition({type:"setStatus",
      payload:{setter:{boxOrder:order,status:!stateOwn}}});
   }
    console.log('allo');
   return  <>
            { 
                    
                    <li > 
                       <i>{ordonne[order]}</i>
                       <label  htmlFor={'ts-'+questionOrder+"-"+order }>
                        <input onChange={ownHandler}  
                           id={'ts-'+questionOrder+"-"+order} 
                           name={"err"+questionOrder}
                           value={order} 
                           checked={stateOwn} 
                           type="checkbox" 
                        />
                        {propsition.value}
                       </label> 
                    </li> 
               }
   </>
}
export default memo(Answers);