import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetclinetComponent } from './getclinet.component';

describe('GetclinetComponent', () => {
  let component: GetclinetComponent;
  let fixture: ComponentFixture<GetclinetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetclinetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetclinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
