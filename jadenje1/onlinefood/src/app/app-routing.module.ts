import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { TagComponent } from './components/pages/tag/tag.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CardPageComponent } from './components/pages/card-page/card-page.component';


const routes: Routes = [
{
  path:'' , 
  component:HomeComponent
},
{
  path:'search/:searchTerm' , 
  component:HomeComponent
},
{
  path:'tag/:tag' , 
  component:TagComponent
},
{
  path:'food/:id' , 
  component:FoodPageComponent
},
{
  path:'card-page' , 
  component:CardPageComponent
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
