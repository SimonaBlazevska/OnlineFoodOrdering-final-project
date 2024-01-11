import { Component , OnInit} from '@angular/core';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
cardQuantity =0;
  constructor (cardService:CardService){
cardService.getCardObservable().subscribe((newCard)=>{
  this.cardQuantity = newCard.totalCount
  })
  }
    ngOnInit():void{

    }
  

}
