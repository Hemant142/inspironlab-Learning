import { Component, HostListener } from '@angular/core';

// @HostListener Notes:
// - @HostListener is an Angular decorator.
// - It allows you to listen to events on the host element of the component.
// - When the specified event occurs, the decorated method is called.

@Component({
  selector: 'app-host-listener',
  standalone: true,
  imports: [],
  templateUrl: './host-listener.component.html',
  styleUrl: './host-listener.component.css'
})
export class HostListenerComponent {
  // This method will be called whenever the component is clicked.
  @HostListener('click', ['$event'])
  display() {
    alert('Hello, this is a display method!');
  }

  // Example of another method that could be used with @HostListener.
  show() {
    alert('Hello, this is a click event handler!');
  }

  // Summary:
  // - @HostListener('click') listens for click events on the component.
  // - The display() method runs when the component is clicked.
  // - You can use @HostListener with other events and methods as needed.
}
