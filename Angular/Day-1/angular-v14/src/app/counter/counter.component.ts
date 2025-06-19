import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent  {


count =0

updateCount(updateFn:(prev:number)=>number){
  this.count =updateFn(this.count)
}

increment(){
  this.updateCount((prev)=>prev+1)
}
decrement(){
  this.updateCount((prev)=>prev-1)
}
reset(){
  this.count=0
}
}
