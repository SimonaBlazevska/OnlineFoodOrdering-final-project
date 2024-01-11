import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { food } from 'src/app/s/model/food';
import { FooodService } from 'src/app/services/foood.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
someValue:any;
  foods:food[] = [];
  constructor(private api:FooodService, activateRoute:ActivatedRoute){
    activateRoute.params.subscribe((params)=>{
      if(params.searchTerm)
      this.foods= this.api.getAllFood8ySearchTerm(params.searchTerm)
    else if(params.tag)
    this.foods = this.api.getAllFoodBy8Tag(params.tag)
      else
     this.foods = api.getAll()
    }
    )
 

}
  ngOnInit() {
   
  }
}
