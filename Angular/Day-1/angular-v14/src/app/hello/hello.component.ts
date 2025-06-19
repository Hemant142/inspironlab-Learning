import { Component, EventEmitter, Input, Output, } from '@angular/core';


@Component({
  selector: 'app-hello',                // HTML tag to use this component
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
// public field - accessible in template with {{ name }}

@Input() name= 'World'

@Output() greeted = new EventEmitter<string>()
// method - also usable from template (e.g (click)=>"sayHello()")
sayHello(){
  this.greeted.emit(this.name)
}
}
