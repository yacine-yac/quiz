export type T_result={proportion:string,wrong:string,success:string,grade:boolean};

 export class ResultModel{ 
   static obj:ResultModel | null=null
   private data:T_result;
   private constructor(data:T_result){
      this.data=data;
   }
   setData(data:T_result){
        this.data=data;
   }
   getData(){
    return this.data;
   }
   clear(){
      ResultModel.obj=null;
   }
   static call(data?:T_result){
      (ResultModel.obj ===null && data) && (ResultModel.obj=new ResultModel(data));
      return ResultModel.obj  
   }
}