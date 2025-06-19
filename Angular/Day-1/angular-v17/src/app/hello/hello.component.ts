import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {

@Input() name = 'World';
@Output() greeted= new EventEmitter<string>()

  onHello(){
   this.greeted.emit(this.name)
  }

}
