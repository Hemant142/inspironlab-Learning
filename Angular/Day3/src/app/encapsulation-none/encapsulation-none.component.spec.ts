import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulationNoneComponent } from './encapsulation-none.component';

describe('EncapsulationNoneComponent', () => {
  let component: EncapsulationNoneComponent;
  let fixture: ComponentFixture<EncapsulationNoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncapsulationNoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EncapsulationNoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
