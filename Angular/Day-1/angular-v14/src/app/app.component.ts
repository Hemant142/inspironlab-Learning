import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day-1';
  onGreeted(person:string){
    console.log(`Greeting received from`, person)
  }
}
