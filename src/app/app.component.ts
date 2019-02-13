import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-app';

  counter: number = 0;

  onSave(){
    this.counter++;
  }

  clear(){
    this.counter = 0;
  }

  hide:boolean = true;
  
  doubleClick(){
    if(this.hide == true){
      this.hide = false;
    }
    else{
      this.hide = true;
    }
  }
}



