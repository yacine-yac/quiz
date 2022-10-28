 
type T_answers={propsition:string,value:number,status:boolean,type?:string}
function Answers({propsition,value,status,type="radio"}:T_answers){
    const ordonne: string[]=["A","B","C","D","E"]; 
   return  <>
                    <li>
                       <i>{ordonne[value]} </i>
                       <label htmlFor={'ts'+value}>
                          <input id={'ts'+value} name="err"
                           value={value} 
                           defaultChecked={status ? true:false} 
                           type={type} />
                          {propsition}
                       </label> 
                    </li>
   </>
}
export default Answers;
