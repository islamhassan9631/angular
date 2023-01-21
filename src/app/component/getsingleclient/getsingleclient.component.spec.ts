import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetsingleclientComponent } from './getsingleclient.component';

describe('GetsingleclientComponent', () => {
  let component: GetsingleclientComponent;
  let fixture: ComponentFixture<GetsingleclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetsingleclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetsingleclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
