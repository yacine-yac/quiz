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
            </div>
            <div className="box-footer">
                <button>Back</button>
                <button>Next</button>
            </div>
         </div>
       </div>
       <Time />
    </>
}
export default Component