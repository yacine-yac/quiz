import Time from './Time';
import './index.css';
function Component(){
    return <>
       <div className='box-1 center-block'>
         <div className="box-1-1 center-block">
            <div className="box-head">
                <h1>Qestion <span>1/15</span></h1> 
            </div>
            <div className="box-body">
                <h2>How to explain the special things like whatever in my manner suit now ?</h2>
                <ul>
                    <li>
                       <i>A</i>
                       <label htmlFor='ts1'>
                          <input id="ts1" type="checkbox" />
                           javascript is compiled language in web Browser
                       </label> 
                    </li> 
                    <li>
                       <i>A</i>
                       <label htmlFor='ts1'>
                          <input id="ts1" type="checkbox" />
                          check the scope of variable 
                       </label> 
                    </li>
                    <li>
                       <i>A</i>
                       <label htmlFor='ts1'>
                          <input id="ts1" type="checkbox" />
                          Angular is not programming language 
                       </label> 
                    </li>
                    <li>
                       <i>A</i>
                       <label htmlFor='ts1'>
                          <input id="ts1" type="checkbox" />
                          you should choice your framework
                       </label> 
                    </li> 
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