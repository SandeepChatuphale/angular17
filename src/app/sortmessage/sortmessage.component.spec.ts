import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortmessageComponent } from './sortmessage.component';

describe('SortmessageComponent', () => {
  let component: SortmessageComponent;
  let fixture: ComponentFixture<SortmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortmessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SortmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
