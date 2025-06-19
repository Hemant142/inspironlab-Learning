import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulationEmulatedComponent } from './encapsulation-emulated.component';

describe('EncapsulationEmulatedComponent', () => {
  let component: EncapsulationEmulatedComponent;
  let fixture: ComponentFixture<EncapsulationEmulatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncapsulationEmulatedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EncapsulationEmulatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
