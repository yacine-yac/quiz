import Component from '../components';  
import "./area.css";
import Result from '../result';
import Demo from '../demo'; 
import ErrorBoundary from './ErrorBoundary';
import {ResultModel} from '../result/modelResult';
import { proposition } from '../components/propositionModel';
import { useEffect, useState } from 'react';
export type T_area={page :1| 2|3 |4,time?:number,mode?:boolean};
function Area(){ 
      const [areaState,setAreaState]=useState<T_area>({page:1,time:undefined});console.log('rrr',areaState.time);
      useEffect(()=>{ console.log('area');  
         if(areaState.page==3){
            let dataPost=proposition.getCheckedPropositions();
            fetch('http://localhost/qcm/app.php',{method:"POST",body:JSON.stringify(dataPost)})
            .then(response=>{
                  response.json().then(res=>{
                      ResultModel.call(res.information);
                      setAreaState(prev=>{return {...prev,page:4}})
                  }).catch(err=>{console.log(err)});
           }).catch(error=>{ console.log(error); throw Error('error fetched');  })
            // console.log(proposition.getCheckedPropositions(),"ddd")
         }
      },[areaState.page]);
     return <>
       {areaState.page===1 && 
            <ErrorBoundary> 
               <Component mode={areaState.mode ?? false} timeOut={areaState.time} nextPage={setAreaState} />
           </ErrorBoundary> }
       {areaState.page===2 && <Demo nextPage={setAreaState}/>}
       {areaState.page===3 && <div className="layer-2 center"><i className="gg-loadbar-alt"></i></div>  }  
       {areaState.page===4   &&  <Result nextPage={setAreaState} />} 
    </>
}
export default Area;