import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

arr =['sai'];

newItem ="";

//Create
pushItem = function(){
  if(this.newItem !=""){
    this.arr.push(this.newItem);
    this.newItem ="";
  }
}

//Update
updateItem =function(){
  if (this.newItem !=""){
    this.arr.update(this.newItem);
    this.newItem="";
  }
}

//Delete
removeItem = function(index){
this.arr.splice(index, 1);

}









}
