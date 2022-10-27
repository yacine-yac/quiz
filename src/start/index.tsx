import {Link} from "react-router-dom";
import "./index.css";
function Start(){
    return <>
      <div className="box-2 center-block center ">
          <h1>Instructions</h1>
          <ol>
            <li>
                This is a timed test. Please make sure you are not interrupted during the test, as the timer cannot be paused once started.
            </li>
            <li>
                Please ensure you have a stable internet connection.
            </li>
            <li>
                In the last of the test, Submit the form.
            </li>
          </ol>
          <Link to="/quiz" className="btn-a btn-active center">Start</Link>
      </div>
    </>
}
export default Start;