import { Component , OnInit} from '@angular/core';
import { Card } from 'src/app/s/model/Card';
import { Carditem } from 'src/app/s/model/Carditem';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.css']
})

export class CardPageComponent implements OnInit{
card!:Card
constructor(private cardService:CardService){
  this.cardService.getCardObservable().subscribe((card) =>{
  this.card = card;
})
  }
  ngOnInit(): void{

  }
  removeFromCard(cardItem:Carditem){
    this.cardService.removeFromCard(cardItem.food.id);
  }
changeQuantity(cardItem:Carditem, quantityInString:string){
  const quantity = parseInt(quantityInString);
  this.cardService.changeQuantity(cardItem.food,quantity);
}

}
  

