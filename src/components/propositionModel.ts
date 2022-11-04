import {T_proposition} from "./type";

class Propositions{
    
    private elements:T_proposition[][]=[];
    public length:number;

    constructor(){
        this.length=this.elements.length;
    }
    setAll(data:T_proposition[][]):void{
       this.elements=data;
       this.length=this.elements.length;
    }
    get(index:number):T_proposition[]{
           return this.elements[index];
    }
    setStatus(indexPropsition:number,indexQuestion:number,value?:boolean):void{
      this.elements[indexQuestion][indexPropsition].status=value ?? !this.elements[indexQuestion][indexPropsition].status;
    }
} 
const proposition=new Propositions();

export {proposition};