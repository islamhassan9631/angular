import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbulidComponent } from './addbulid.component';

describe('AddbulidComponent', () => {
  let component: AddbulidComponent;
  let fixture: ComponentFixture<AddbulidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbulidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbulidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
