import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalukCreateComponent } from './taluk-create.component';

describe('TalukCreateComponent', () => {
  let component: TalukCreateComponent;
  let fixture: ComponentFixture<TalukCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalukCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalukCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
