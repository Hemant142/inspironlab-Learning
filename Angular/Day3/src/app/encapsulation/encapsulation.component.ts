import { Component, ViewEncapsulation } from '@angular/core';
import { EncapsulationEmulatedComponent } from "../encapsulation-emulated/encapsulation-emulated.component";
import { EncapsulationShadowDomComponent } from "../encapsulation-shadow-dom/encapsulation-shadow-dom.component";
import { EncapsulationNoneComponent } from "../encapsulation-none/encapsulation-none.component";

@Component({
  selector: 'app-encapsulation',
  standalone: true,
  imports: [EncapsulationEmulatedComponent, EncapsulationShadowDomComponent, EncapsulationNoneComponent],
  templateUrl: './encapsulation.component.html',
  styleUrl: './encapsulation.component.css',
  encapsulation: ViewEncapsulation.None // This property is used to set the encapsulation mode of the component. It is used to set the encapsulation mode of the component. It is used to set the encapsulation mode of the component.
  // It is used to set the encapsulation mode of the component. It is used to set the encapsulation mode of the component.
})
export class EncapsulationComponent {

}
