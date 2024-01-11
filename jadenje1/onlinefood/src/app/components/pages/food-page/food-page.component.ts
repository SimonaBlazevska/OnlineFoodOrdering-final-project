import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { food } from 'src/app/s/model/food';
import { CardService } from 'src/app/services/card.service';
import { FooodService } from 'src/app/services/foood.service';
import { StarRatingComponent } from 'ng-starrating';


@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']

})
export class FoodPageComponent implements OnInit  {
food!:food;
  constructor(activatedRoute:ActivatedRoute , private api:FooodService ,
     private cardService:CardService, private router:Router){
  activatedRoute.params.subscribe((params) => {
    if(params.id)
    this.food = api.getFoodById(params.id)
  });
  }
  
  ngOnInit(): void{

    }
    addToCard(){
      this.cardService.addToCard(this.food);
      this.router.navigateByUrl('/card-page')
    }
  
}
