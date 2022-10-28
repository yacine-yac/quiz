import Time from './Time';
import './index.css';
import Answers from './Answers';
import { T_component,quiz } from './type';
import { useEffect, useState } from 'react';
function Component(){
    const data=[{Answer:"javascript is compiled language in web Browser"},{Answer:"check the scope of variable"},{Answer:" Angular is not programming language "},{Answer:"   you should choice your framework"}]
    const [quiz,setQuiz]=useState([] as T_component);
    const [counter,setCounter]=useState(0);
    const {proposition=[],question=null}= quiz.length>0 ? quiz[counter] : {} as quiz ;
    useEffect(()=>{
            fetch('http://localhost/qcm/')
            .then(response=>{
                 response.json().then(dataRes=>setQuiz(dataRes)).catch(err=>console.log(err));
            })
           .catch(error=>{console.log(error)});
    },[]);
    return <>
       <div className='box-1 center-block'>
         <div className="box-1-1 center-block">
            <a role="button" href='#' >Get Back</a> 
            <div className="box-head">
                <h1>Qestion <span>{counter}/{quiz.length}</span></h1> 
            </div>
            <div className="box-body">
                <h2>{question}</h2>
                <ul>
                  { (proposition.length>0)  && proposition.map((x:string,y:number)=><Answers key={y}  propsition={x} value={y} status={false} />)}
                </ul>
            </div>
            <div className="box-footer">
                <button className='btn btn-active'>Next</button>
                <button className='btn'>Back</button>
            </div>
         </div>
       </div>
       <Time />
    </>
}
export default Component