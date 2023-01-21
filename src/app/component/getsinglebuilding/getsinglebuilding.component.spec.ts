import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetsinglebuildingComponent } from './getsinglebuilding.component';

describe('GetsinglebuildingComponent', () => {
  let component: GetsinglebuildingComponent;
  let fixture: ComponentFixture<GetsinglebuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetsinglebuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetsinglebuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
