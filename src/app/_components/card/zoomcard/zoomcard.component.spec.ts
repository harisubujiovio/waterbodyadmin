import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomcardComponent } from './zoomcard.component';

describe('ZoomcardComponent', () => {
  let component: ZoomcardComponent;
  let fixture: ComponentFixture<ZoomcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoomcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
