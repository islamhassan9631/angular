import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetsingleuserComponent } from './getsingleuser.component';

describe('GetsingleuserComponent', () => {
  let component: GetsingleuserComponent;
  let fixture: ComponentFixture<GetsingleuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetsingleuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetsingleuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
