import {T_elements, T_proposition} from "./type";

class Propositions{
    
    private elements:T_elements[]=[];
    public length:number; 
    constructor(){
        this.length=this.elements.length;
    }
    setAll(data:T_elements[]):void{
       this.elements=data;
       this.length=this.elements.length;
    }
    getpropositions(indexQuestion:number):T_proposition[]{
           return this.elements[indexQuestion].proposition;
    } 
    getElement(index:number){
       return this.elements[index];
    }
    setStatus(indexQuestion:number,indexPropsition:number,value?:boolean):void{
      let currentProposition=this.elements[indexQuestion].proposition[indexPropsition] 
      currentProposition.status=value ?? !currentProposition.status;
    } 
} 
const proposition=new Propositions();

export {proposition};