import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulationShadowDomComponent } from './encapsulation-shadow-dom.component';

describe('EncapsulationShadowDomComponent', () => {
  let component: EncapsulationShadowDomComponent;
  let fixture: ComponentFixture<EncapsulationShadowDomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncapsulationShadowDomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EncapsulationShadowDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
