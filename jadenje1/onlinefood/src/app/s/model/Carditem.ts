import { food } from "./food";

export class Carditem{
    constructor(public food:food){}
    quantity:number =1;
    price:number = this.food.price;
}