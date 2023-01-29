import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetsinglefloorComponent } from './getsinglefloor.component';

describe('GetsinglefloorComponent', () => {
  let component: GetsinglefloorComponent;
  let fixture: ComponentFixture<GetsinglefloorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetsinglefloorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetsinglefloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
