import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetsinglebuildComponent } from './getsinglebuild.component';

describe('GetsinglebuildComponent', () => {
  let component: GetsinglebuildComponent;
  let fixture: ComponentFixture<GetsinglebuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetsinglebuildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetsinglebuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
