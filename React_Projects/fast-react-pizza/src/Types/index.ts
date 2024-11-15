export type MenuData = {
    id:number;
    name:string;
    unitPrice:number;
    imageUrl:string;
    ingredients:string[];
    soldOut:boolean;
}


export type MenuTypes = {
    status:boolean
    data:MenuData[]

}

type CartType = {
    cart:{
        pizzaId:number;
        name:string;
        quantity:number;
        unitPrice:number;
        totalPrice:number;
    
      }
}



export type OrderType = {
    // id:string,
    customer:string,
    phone:string,
    address:string
    priority:boolean,
   cart:CartType[]
  }
  



export type ParamsType ={
    params:{
        orderId:number
    }
}


export type Errorsype = {
    phone:string
}