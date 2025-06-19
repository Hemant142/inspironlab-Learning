import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
count=0

onIncrement(){
  this.count++
}
onDecrement(){
  this.count--
}
onReset(){
  this.count=0
}
}
