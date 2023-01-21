import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetsingletransactionsComponent } from './getsingletransactions.component';

describe('GetsingletransactionsComponent', () => {
  let component: GetsingletransactionsComponent;
  let fixture: ComponentFixture<GetsingletransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetsingletransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetsingletransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
