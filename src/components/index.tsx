import Time from './Time';
import './index.css';
import Answers from './Answers';
import { T_proposition,button_event,   } from './type';
import { memo, useEffect, useState } from 'react';  
import QuizButton from './quizButton'; 
import {proposition} from './propositionModel';
function Component(){
    const [counter,setCounter]=useState(0);
    const [questions,setQuestion]=useState<Array<string>>([]);
    const [currentPropisition,setCurrentProposition]=useState<T_proposition[] >([]); 
    useEffect(()=>{  
           fetch('http://localhost/qcm/')
                .then(response=>{
                    response.json().then((dataRes)=>{ 
                         proposition.setAll(dataRes.proposition);
                         setCurrentProposition(proposition.get(0));
                         setQuestion(dataRes.question);
                    }).catch(err=>console.log(err));
            })
           .catch(error=>{console.log(error)});
    },[]); console.log(proposition,"eee");
    const increament:button_event=()=>{
      /** check counter by increament +2 because the counter start from 0 
       *  //and the first question is always selected before increament the counter
       */
       setCounter(counter+1);  
       counter < proposition.get(counter).length-1 && setCurrentProposition(proposition.get(counter+1)); 
     };
    const decreament=():void=>{
      if( counter >0){ 
         setCounter(counter-1);
         setCurrentProposition(proposition.get(counter-1));
      }
    }
    const handleProposition=(index:number,status:boolean)=>{
          proposition.setStatus(index,counter);
          setCurrentProposition(prev=>{
             prev[index]={...prev[index],status}
             return [...prev];
          });
    }
    return <>
       <div className='box-1 center-block'>
         <div className="box-1-1 center-block">
            <a role="button" href='#' >Get Back</a> 
            <div className="box-head">
                <h1>Qestion <span>{counter+1}/{proposition.length}</span></h1> 
            </div>
            <div className="box-body">
                <h2>{questions.length> 0 && questions[counter]}</h2>
                <ul>
                  {   
                  currentPropisition !=null &&     
                    currentPropisition.map((x,y)=>  
                        <Answers  
                              propsition={x}
                              questionOrder={counter}  
                              order={y} key={y} 
                              handleProposition={handleProposition}
                        />)
                   }
                </ul>
            </div>
            <div className="box-footer">
              { counter==proposition.length-1 
                ?  <button className='btn btn-submit' type='button'>Submit</button>
                :  <QuizButton   increament={increament}/>
              }
              <button onClick={decreament} hidden={counter==0 ? true:false}  className='btn'>Back</button>
            </div>
         </div>
       </div>
       <Time />
    </>
}
export default memo(Component);