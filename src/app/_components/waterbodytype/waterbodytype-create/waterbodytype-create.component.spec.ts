import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterbodytypeCreateComponent } from './waterbodytype-create.component';

describe('WaterbodytypeCreateComponent', () => {
  let component: WaterbodytypeCreateComponent;
  let fixture: ComponentFixture<WaterbodytypeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterbodytypeCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterbodytypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
