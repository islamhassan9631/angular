import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddclinetComponent } from './addclinet.component';

describe('AddclinetComponent', () => {
  let component: AddclinetComponent;
  let fixture: ComponentFixture<AddclinetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddclinetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddclinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
