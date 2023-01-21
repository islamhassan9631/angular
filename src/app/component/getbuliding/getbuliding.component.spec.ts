import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbulidingComponent } from './getbuliding.component';

describe('GetbulidingComponent', () => {
  let component: GetbulidingComponent;
  let fixture: ComponentFixture<GetbulidingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetbulidingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetbulidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
