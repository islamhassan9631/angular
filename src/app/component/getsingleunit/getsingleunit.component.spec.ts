import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetsingleunitComponent } from './getsingleunit.component';

describe('GetsingleunitComponent', () => {
  let component: GetsingleunitComponent;
  let fixture: ComponentFixture<GetsingleunitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetsingleunitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetsingleunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
