import Time from './Time';
import './index.css';
import Answers from './Answers';
import { T_proposition,button_event, T_handleAnswer,I_multiAnswers, T_reducer } from './type';
import { useEffect, useReducer, useState } from 'react';  
import QuizButton from './quizButton';
import { MultiAnswers } from './modelAnswers'; 
function Component(){
    const reducer:T_reducer=(state,action)=>{
          switch(action.type){
                case "setStatus": {
          const {boxOrder=0,status=false}= action.payload?.setter ?? {} as {status:boolean,boxOrder:number};
                    
                       let current=state; 
                   current[counter][boxOrder]={...current[counter][boxOrder],status} ;
                  return  [...current];
                };
               case "add":{return action.payload.data ?? [] as T_proposition[][]}
               default : return state;
          }
    }
    const [counter,setCounter]=useState(0);
    const [propositions,setProposition]=useReducer(reducer,[] as Array<T_proposition[]>);
    const [questions,setQuestion]=useState<Array<string>>([]);
    const [currentPropisition,setCurrentProposition]=useState<T_proposition[] | null>(null);
    const [button_state,setButtonState]=useState<boolean>(false);
    let submitAnswers:I_multiAnswers[]=[];  
    useEffect(()=>{  
           fetch('http://localhost/qcm/')
                .then(response=>{
                    response.json().then((dataRes)=>{
                         setProposition({type:"add",payload:{data:dataRes.proposition}});
                         setCurrentProposition(dataRes.proposition[0]);
                         setQuestion(dataRes.question);
                    }).catch(err=>console.log(err));
            })
           .catch(error=>{console.log(error)});
    },[]);
    const increament:button_event=()=>{
      /** check counter by increament +2 because the counter start from 0 
       *  //and the first question is always selected before increament the counter
       */
       setCounter(counter+1);  
       counter < propositions.length-1 && setCurrentProposition(propositions[counter+1]); 
       counter+2==propositions.length &&  setButtonState(true);
       (counter+2<propositions.length &&  button_state===true) && setButtonState(false);  
    };
    const decreament=():void=>{
       counter >0 &&   (setCounter(counter-1),setCurrentProposition(propositions[counter-1]));
       (counter>0 && button_state===true) && setButtonState(false);
    }
    let questionAnswer= new MultiAnswers(counter);
    submitAnswers.push(questionAnswer);
    console.log(currentPropisition);
    const handleAnswer=(e:number):void=>{
       
    } 
    return <>
       <div className='box-1 center-block'>
         <div className="box-1-1 center-block">
            <a role="button" href='#' >Get Back</a> 
            <div className="box-head">
                <h1>Qestion <span>{counter+1}/{propositions.length}</span></h1> 
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
                              handleAnswers={handleAnswer} 
                              setProposition={setProposition}
                        />)
                   }
                </ul>
            </div>
            <div className="box-footer">
              { button_state 
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
export default Component;