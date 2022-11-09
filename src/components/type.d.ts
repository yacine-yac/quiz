import React from "react";

export type T_proposition={
    value:string,
    status: boolean 
};

export type T_elements={question:string,proposition:T_proposition[],choice:boolean};
export type button_event=(e:React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>)=>void;

export type T_handleAnswer =(e: React.ChangeEvent<HTMLInputElement>)=>void;


export interface I_multiAnswers{
    value:number | undefined,
    answers:string[] ,
    remove:(value:string)=>void
}


 
 
 
