import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from "./hello/hello.component";
import { CounterComponent } from "./counter/counter.component";
import { TimerComponent } from "./timer/timer.component";
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, HelloComponent, CounterComponent, TimerComponent, TodoComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-v17';
  state=true
  onToggle(){
this.state=!this.state
  }
  onGreeting(person:string){
    console.log(`Greeting from ${person}`)
    alert(`Greeting from ${person}`)
  }
}
