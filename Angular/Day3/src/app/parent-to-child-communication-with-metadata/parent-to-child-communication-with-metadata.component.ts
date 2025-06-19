import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-to-child-communication-with-metadata',
  standalone: true,
  imports: [],
  templateUrl: './parent-to-child-communication-with-metadata.component.html',
  styleUrl: './parent-to-child-communication-with-metadata.component.css',
  inputs:['Pdata'] // This property is used to define the input properties of the component. It is used to define the input properties of the component. It is used to define the input properties of the component.
  // It is used to define the input properties of the component. It is used to define the input properties of the component.
})
export class ParentToChildCommunicationWithMetadataComponent {
Pdata: any;

}
