import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
})
export class StudentComponent {
  isLoggedIn: boolean = false;
  age: number = 62;
  name: string = 'Roshi';
  students: { id: number; name: string }[] = [
    { id: 1, name: 'Hemant' },
    { id: 2, name: 'Rahul' },
    { id: 3, name: 'Shriya' },
    { id: 4, name: 'Pooja' },
  ];
  Login() {
    this.isLoggedIn = true;
  }
  logout() {
    this.isLoggedIn = false;
  }
}
