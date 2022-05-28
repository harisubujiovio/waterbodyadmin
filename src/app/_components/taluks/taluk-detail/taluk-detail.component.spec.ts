import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalukDetailComponent } from './taluk-detail.component';

describe('TalukDetailComponent', () => {
  let component: TalukDetailComponent;
  let fixture: ComponentFixture<TalukDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalukDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalukDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
