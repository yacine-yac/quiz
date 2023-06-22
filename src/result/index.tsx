import React from 'react'; 
import {T_area} from '../Area';
import {ResultModel,T_result} from './modelResult';
import {proposition} from "../components/propositionModel";
import './index.css';
function Result({nextPage}:{nextPage:React.Dispatch<React.SetStateAction<T_area>>}){
      const handleBack=()=>{nextPage({mode:true,page:1})}; 
      const rest=()=>{proposition.clear();ResultModel.call()?.clear(); nextPage({page:1})}; 
      const {success,wrong,proportion,grade}= ResultModel.call()?.getData() ?? {} as T_result;
      document.documentElement.style.setProperty('--progress-value',proportion);
      /*eslint-disable */
     return <>
        <div className="box-4 center-block center">
            <span><a onClick={handleBack} role="button" >
               <svg width="64px" height="64px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#D5D5D5" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"></path><path fill="#D5D5D5" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"></path></g></svg>
                </a></span> 
                <div className="progress-bar html">
                   <progress id="html"   max="100" value="60"></progress>
               </div>
        

            {/* <div className={circlClasses}>{ `${proportion}%`}</div> */}
            <div className='box-result'>
                <ul className='center-h'>
                    <li>Succes Answers: <span>{success}</span></li>
                    <li>Wrong Answers:<span>{wrong}</span></li>  
                </ul>
                <button onClick={rest} className='btn btn-a-2 btn-next center'>Retake Test</button>
            </div>
        </div>
      </>
}
export default Result;