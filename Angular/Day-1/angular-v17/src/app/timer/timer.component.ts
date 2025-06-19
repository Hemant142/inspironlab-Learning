import { Component ,OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent implements OnInit ,OnDestroy {
timer=0
// ngOnit
// Work on lifecycle methods
isrunning=false
private intervalId:any=null

// constructor(){
// this.intervalId= setInterval(()=>{
//   console.log(this.timer,"Timer")
//   if(this.isrunning){
//     this.timer++
//   }
// },1000)
// }

ngOnInit(){
  this.intervalId=setInterval(()=>{
    // console.log(this.timer,"Timer")
      if(this.isrunning){
      this.timer++
    }
    },1000)
}

 ngOnDestroy(): void {
  clearInterval(this.intervalId);
}

onStart(){
  this.isrunning=true

//   setInterval(()=>{
//   console.log(this.timer,"Timer")
//   if(this.isrunning){
//     this.timer++
//   }
// },1000)
}

onStop(){
  this.isrunning=false
}

onReset(){
  this.isrunning=false
  this.timer=0
}


}
