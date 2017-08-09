import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

arr =['venkata','sairikb','kumarc'];

newItem ="";
pushItem = function(){
  if(this.newItem !=""){
    this.arr.push(this.newItem);
    this.newItem ="";
  }
}
removeItem = function(index){
this.arr.splice(index, 1);

}









}
