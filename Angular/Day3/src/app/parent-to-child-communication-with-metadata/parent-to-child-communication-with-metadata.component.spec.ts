import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentToChildCommunicationWithMetadataComponent } from './parent-to-child-communication-with-metadata.component';

describe('ParentToChildCommunicationWithMetadataComponent', () => {
  let component: ParentToChildCommunicationWithMetadataComponent;
  let fixture: ComponentFixture<ParentToChildCommunicationWithMetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentToChildCommunicationWithMetadataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentToChildCommunicationWithMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
