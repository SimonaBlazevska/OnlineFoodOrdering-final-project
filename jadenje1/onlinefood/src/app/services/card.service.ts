import { Injectable } from '@angular/core';
import { Card } from '../s/model/Card';
import { BehaviorSubject, Observable } from 'rxjs';
import { food } from '../s/model/food';
import { Carditem } from '../s/model/Carditem';


@Injectable({
  providedIn: 'root'
})
export class CardService {
private card:Card = new Card();
private cardSubject:BehaviorSubject<Card> = new BehaviorSubject(this.card)
  constructor() { }
  addToCard(food:food):void{
    let cardItem= this.card.items.find(item => item.food.id === food.id);
    if(cardItem)
    return;
  
    this.card.items.push(new Carditem(food))
    this.setCardToLocalStorage();
  }
  removeFromCard(foodid:string):void{
    this.card.items = this.card.items.filter(item => item.food.id != foodid)
    this.setCardToLocalStorage();

  }

  changeQuantity(food:food, quantity:number){
    let cardItem = this.card.items.find(item => item.food.id === food.id);
    if(!cardItem)
    return;
  cardItem.quantity = quantity;
  cardItem.price = quantity * cardItem.food.price;
this.setCardToLocalStorage(); 
}
  clearCard(){
    this.card = new Card();
    this.setCardToLocalStorage();
  }
getCardObservable():Observable<Card>{
  return  this.cardSubject.asObservable();
}
private setCardToLocalStorage():void{
  this.card.totalPrice = this.card.items.reduce((prevSum, currentItem) =>prevSum + currentItem.price , 0 );
  this.card.totalCount = this.card.items.reduce((prevSum, currentItem) => prevSum + currentItem.quantity , 0);

  const cardJson =JSON.stringify(this.card);
  localStorage.setItem('Card',cardJson);
  this.cardSubject.next(this.card)
}
private getCardFromLocalStorage():Card{
  const cardJson = localStorage.getItem('Card');
  return cardJson?JSON.parse(cardJson):new Card();
}
}

