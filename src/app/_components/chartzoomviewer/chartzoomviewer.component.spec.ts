import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartzoomviewerComponent } from './chartzoomviewer.component';

describe('ChartzoomviewerComponent', () => {
  let component: ChartzoomviewerComponent;
  let fixture: ComponentFixture<ChartzoomviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartzoomviewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartzoomviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
