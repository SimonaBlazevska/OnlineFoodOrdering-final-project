import { Component , OnInit } from '@angular/core';
import { FooodService } from 'src/app/services/foood.service';
import { tag } from 'src/app/s/model/tag';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit{
tags?:tag[] = [];
  
constructor(activateRoute:ActivatedRoute,public foodService:FooodService){
   
  }
ngOnInit(): void {
 this.tags = this.foodService.getAllTags();
}
}
