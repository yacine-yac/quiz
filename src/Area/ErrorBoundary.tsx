import {  Component} from "react";
import picture from './media/404.png';
class ErrorBoundary extends Component<{children:JSX.Element},{hasError:boolean}>{
    constructor(props:{children:JSX.Element}){
        super(props);
        this.state={hasError:false};
    }
    static getDerivedStateFromError(){
          return {hasError:true};
    }
    
    render(){  console.log(this.props,"eee");
      return <>
              {this.state.hasError 
                  ? <div className="box-error center-block center">
                    <img src={picture} alt="error-icon"  /> 
                    <h1>Error page not found</h1>
                  </div>
                  : this.props.children }   
      </>
    }
}

export default ErrorBoundary;