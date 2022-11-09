import Time from './Time';
import './index.css';
import Answers from './Answers';
import { T_proposition,button_event,T_elements   } from './type';
import React, { memo, useCallback, useEffect, useState } from 'react';  
import QuizButton from './quizButton'; 
import {proposition} from './propositionModel';
import { T_area } from '../Area';
import {timeDefault} from "./Time/configTime";
import SkeletonAnswers from './skeletonAnswers';
type T_component={  
          nextPage:React.Dispatch<React.SetStateAction<T_area>>,
          timeOut:T_area['time'],
          mode:boolean};
function Component({nextPage,timeOut=timeDefault,mode=false}:T_component){
    const [counter,setCounter]=useState(0); 
    const [elements,setElements]=useState<T_elements>({} as T_elements); 
    const [time,setTime]=useState<number>(timeOut===timeDefault? -1:timeOut);  
    time ===0 && setTimeout(()=>{nextPage({page:3,mode:true})},1000) ; 
    useEffect(()=>{  console.log("effect");
        proposition.length===0   
          ?  fetch('http://localhost/qcm/')
                .then(response=>{
                    response.json().then((dataRes)=>{ 
                         proposition.setAll(dataRes); 
                         setElements(proposition.getElement(0)); 
                         setTime(timeOut);
                    }).catch(err=>{console.log(err)});
            })
           .catch(error=>{console.log(error)})
          :(setElements(proposition.getElement(0)));
    }); 
    const increament:button_event= ()=>{
      /** check counter by increament +2 because the counter start from 0 
       *  //and the first question is always selected before increament the counter
       */
       setCounter(counter+1);  
       counter < proposition.getpropositions(counter).length-1 && setElements(proposition.getElement(counter+1)); 
     } ;
    const decreament= ():void=>{
      if( counter >0){ 
         setCounter(counter-1);
         setElements(proposition.getElement(counter-1));
      }
    };
    const handleProposition=useCallback((index:number,status:boolean)=>{ 
          proposition.setStatus(counter,index);
          setElements(prev=>{
             prev.proposition[index]={...prev.proposition[index],status}
             return {...prev};
          }); 
    },[counter]);
    const handleSubmit=()=>{nextPage({page:2,time});}
    return <>
       <div className='box-1 center-block'>
         <div className="box-1-1 center-block">
            { mode===true && <a role="button" onClick={()=>nextPage({page:3})} >Get Back</a> }
            <div className="box-head">
              {proposition.length>0 
               ? <h1>Qestion <span>{counter+1}/{proposition.length}</span></h1> 
              : <div className="skeleton skeleton-text-med center"></div>}
                
            </div>
            <div className="box-body">
               {elements.question ?  <h2>{elements.question}</h2>
                 : <div className="skeleton skeleton-text-big"></div>}
                <ul>
                  {   
                  elements.proposition     
                   ? elements.proposition.map((x,y)=>  
                        <Answers  
                              propsition={x}
                              questionOrder={counter}  
                              order={y} key={y} 
                              handleProposition={handleProposition}
                              mode={mode}
                              type={elements.choice}
                        />)
                    : <SkeletonAnswers />
                   }
                </ul>
            </div>
            <div className="box-footer">
              { 
              !elements.proposition
              ? 
                <div className='skeleton skeleton-button'></div>
              :counter==proposition.length-1 
                ?  <button className='btn btn-submit' onClick={handleSubmit} type='button'>Submit</button>
                    :  counter!==proposition.length-1 && <QuizButton   increament={increament}/>
              }
              <button onClick={decreament} hidden={counter==0 ? true:false}  className='btn'>Back</button>
            </div>
         </div>
       </div>
      {mode===false && <Time setTime={setTime} time={time} />}
    </>
}
export default memo(Component);