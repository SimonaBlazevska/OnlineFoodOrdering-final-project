import { Injectable } from '@angular/core';
import { food } from '../s/model/food';
import { sample_foods, sample_tags } from 'src/data';
import { tag } from '../s/model/tag';


@Injectable({
  providedIn: 'root'
})
export class FooodService {

  constructor() {}
  
  getAll():food[]{
  return sample_foods;

}
getAllFood8ySearchTerm(searchTerm:string):food[]{
return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
}
getAllTags():tag[]{
  return sample_tags
}
getAllFoodBy8Tag(tag:string):food[]{
  return tag === "All"? 
  this.getAll():
  this.getAll().filter(food => food.tags?.includes(tag));
}
getFoodById(foodid:string){
  return this.getAll().find(food => food.id == foodid)?? new food();

}
}