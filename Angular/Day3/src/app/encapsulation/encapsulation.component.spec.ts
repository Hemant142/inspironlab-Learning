import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulationComponent } from './encapsulation.component';

describe('EncapsulationComponent', () => {
  let component: EncapsulationComponent;
  let fixture: ComponentFixture<EncapsulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncapsulationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
