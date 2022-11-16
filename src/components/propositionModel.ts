 
import {T_elements, T_proposition} from "./type";
type T_CheckedPropositions=Array<{checked:number[]}>;
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
    clear():void{
       this.length=0;
       this.elements=[];
    }
    getCheckedPropositions():T_CheckedPropositions{
      const model:T_CheckedPropositions=[];
      for (let element  of this.elements){
         const checking={checked:[]}  as {checked:number[]};
         element.proposition.forEach((x,y)=>{ x.status===true && checking.checked.push(y) })
         model.push(checking);
      };
         return  model;
   }
   setTruthStatus(truthStatus:{final:Array<number>}[]):void{
        this.elements= this.elements.map((a,b)=>{
           let propo= a.proposition.map((y,z)=>{ 
               const isInside= truthStatus[b].final.includes(z); 
               return {...y,status:isInside};
            });
            return {...a,proposition:propo};
         });
   }
} 
const proposition=new Propositions();

export {proposition};