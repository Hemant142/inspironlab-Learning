import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnDestroy {
  time = 0;
  isrunning = false;
  isIncrementing = true;
  private intervalId: any = null;


  startTimer() {
    this.isrunning = true;
       this.intervalId = setInterval(() => {
      console.log('Timer tick:', this.time);
      console.log('isrunning:', this.isrunning);
        if (this.time == 10) {
          this.isIncrementing = false;
        }
        if (this.time == 0) {
          this.isIncrementing = true;
        }
        if (this.isIncrementing) {
          this.time++;
        } else {
        this.time--;
      }
    }, 1000);
  
  }
  stopTimer() {
    this.isrunning = false;
      clearInterval(this.intervalId);
  }

  resetTimer() {
    this.time = 0;
    this.isIncrementing = true;
    this.isrunning = false;
      clearInterval(this.intervalId);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
