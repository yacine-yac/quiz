import React from 'react'; 
import {T_area} from '../Area';
import {ResultModel,T_result} from './modelResult';
import {proposition} from "../components/propositionModel";
import './index.css';
function Result({nextPage}:{nextPage:React.Dispatch<React.SetStateAction<T_area>>}){
      const handleBack=()=>{nextPage({mode:true,page:1})}; 
      const rest=()=>{proposition.clear();ResultModel.call()?.clear(); nextPage({page:1})}; 
      const {success,wrong,proportion,grade}= ResultModel.call()?.getData() ?? {} as T_result;
      const circlClasses= grade ?`circle center-block center succes`: "circle center-block center wrong";
     /*eslint-disable */
     return <>
        <div className="box-4 center-block center">
            <a href='#' onClick={handleBack} role="button" >Get Back</a>
            <div className={circlClasses}>{ `${proportion}%`}</div>
            <div className='box-result'>
                <ul>
                    <li>Succes Answers: <span>{success}</span></li>
                    <li>Wrong Answers:<span>{wrong}</span></li>  
                </ul>
                <button onClick={rest} className='btn btn-a-2 btn-next center'>Retake Test</button>
            </div>
        </div>
      </>
}
export default Result;