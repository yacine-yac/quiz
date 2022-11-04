import { memo } from "react";
import { button_event } from "./type"; 

function QuizButton({increament}:{increament:button_event}){
  return <>
                <button onClick={increament} className='btn btn-next'>Next</button>    
  </>
}
export default memo(QuizButton);