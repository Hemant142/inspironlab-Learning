import { Component } from '@angular/core';

class abc{
  constructor(){
    console.log("Hello, this is a constructor of abc class!");
  }
  onShow(){
    console.log("Hello, this is a show method of abc class!");
  }
  onButtonClick(){
    alert('viewProvider component button clicked!');
  }
}
@Component({
  selector: 'app-view-provider',
  standalone: true,
  imports: [],
  templateUrl: './view-provider.component.html',
  styleUrl: './view-provider.component.css',
  viewProviders:[abc] // This property is used to provide the abc class to the component. It is used to provide the class to the component so that it can be used in the template.
  // It is used to provide the class to the component so that it can be used in the template. It is used to provide the class to the component so that it can be used in the template.
})
export class ViewProviderComponent {
  onButtonClick: any;

constructor(private _abc: abc) {
  _abc.onShow(); // This line calls the onShow method of the abc class when the component is created.
  // It is used to call the onShow method of the abc class when the component is created.
  this.onButtonClick = this._abc.onButtonClick.bind(this._abc);
  // This line binds the onButtonClick method of the abc class to the current context of the component.
  // It ensures that when the button is clicked, the onButtonClick method of the abc class is called.
}
}
