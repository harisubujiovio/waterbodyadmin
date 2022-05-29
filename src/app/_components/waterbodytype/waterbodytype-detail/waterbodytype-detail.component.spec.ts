import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterbodytypeDetailComponent } from './waterbodytype-detail.component';

describe('WaterbodytypeDetailComponent', () => {
  let component: WaterbodytypeDetailComponent;
  let fixture: ComponentFixture<WaterbodytypeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterbodytypeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterbodytypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
