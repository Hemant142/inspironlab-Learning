import { Component, ViewEncapsulation } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HostListenerComponent } from "./host-listener/host-listener.component";
import { MetadataComponent } from "./metadata/metadata.component";
import { ViewProviderComponent } from "./view-provider/view-provider.component";
import { EncapsulationComponent } from "./encapsulation/encapsulation.component";
import { ParentToChildCommunicationWithMetadataComponent } from "./parent-to-child-communication-with-metadata/parent-to-child-communication-with-metadata.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HostListenerComponent, MetadataComponent, ViewProviderComponent, EncapsulationComponent, ParentToChildCommunicationWithMetadataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'Day3';

} 
