import React from "react";

export type T_proposition={
    value:string,
    status: boolean 
};

export type button_event=(e:React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>)=>void;

export type T_handleAnswer =(e: React.ChangeEvent<HTMLInputElement>)=>void;


export interface I_multiAnswers{
    value:number | undefined,
    answers:string[] ,
    remove:(value:string)=>void
}



export type T_reducer = (
    state: Array<T_proposition[]>,
    action:{
        type:'setStatus' | 'add',
        payload:{
             data?: Array<T_proposition[]>,
             setter?:{
                boxOrder:number,
                status:boolean,
             }
        }
    } 
)  => Array<T_proposition[]>;
 
 
 
