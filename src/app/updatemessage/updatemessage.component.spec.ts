import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemessageComponent } from './updatemessage.component';

describe('UpdatemessageComponent', () => {
  let component: UpdatemessageComponent;
  let fixture: ComponentFixture<UpdatemessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatemessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatemessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
