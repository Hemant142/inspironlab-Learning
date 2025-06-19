import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
task:string=""
todos:{id:number,title:string, completed:boolean}[]=[]

onAddTodo(){
  console.log(this.task.trim())
  if(this.task.trim()!==""){
    this.todos.push({id:Date.now(),title:this.task.trim(), completed:false})
    this.task=""

  }
}

onToggleTodo(todo:{id:number,title:string, completed:boolean}){
  todo.completed=!todo.completed
  console.log(this.todos,"Updates Todos")
}

onDeleteTodo(id:number){
  
  this.todos=this.todos.filter((t)=>t.id!==id)
}
}
