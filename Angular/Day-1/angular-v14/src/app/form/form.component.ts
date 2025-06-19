import { Component, OnInit } from '@angular/core';
import { stat } from 'fs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
Enter: any;
title:string=""
task:string=""
status:boolean= false

  constructor() {
    console.log(this.title, this.task, this.status);
   }

 addTask (){
  let task={
    id:Date.now(),
    title:this.title,
    task:this.task,
    status:this.status
  }
  console.log(task,"Task")
 }

  ngOnInit(): void {
  }

}
