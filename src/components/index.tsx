import Time from './Time';
import './index.css';
import Answers from './Answers';
import { useState } from 'react';
function Component(){
    const data=[{Answer:"javascript is compiled language in web Browser"},{Answer:"check the scope of variable"},{Answer:" Angular is not programming language "},{Answer:"   you should choice your framework"}]
    const [question,setQuestion]=useState({});
    return <>
       <div className='box-1 center-block'>
         <div className="box-1-1 center-block">
            <a role="button" href='#' >Get Back</a> 
            <div className="box-head">
                <h1>Qestion <span>1/15</span></h1> 
            </div>
            <div className="box-body">
                <h2>How to explain the special things like whatever in my manner suit now ?</h2>
                <ul>
                  {data.map((x,y)=><Answers key={y} answer={x.Answer} value={y} status={true} />)}
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