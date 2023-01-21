import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetsingleprojectComponent } from './getsingleproject.component';

describe('GetsingleprojectComponent', () => {
  let component: GetsingleprojectComponent;
  let fixture: ComponentFixture<GetsingleprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetsingleprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetsingleprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
