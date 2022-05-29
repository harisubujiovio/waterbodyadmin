import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterbodytypeListComponent } from './waterbodytype-list.component';

describe('WaterbodytypeListComponent', () => {
  let component: WaterbodytypeListComponent;
  let fixture: ComponentFixture<WaterbodytypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterbodytypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterbodytypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
