import './index.css';
function Result(){
      return <>
        <div className="box-4 center-block center">
            <a href='#' role="button">Get Back</a>
            <div className='circle center-block center'>55%</div>
            <div className='box-result'>
                <ul>
                    <li>Succes Answers: <span>5</span></li>
                    <li>Wrong Answers:<span>6</span></li>  
                </ul>
                <button className='btn'>Retake Test</button> 
            </div>
        </div>
      </>
}
export default Result;