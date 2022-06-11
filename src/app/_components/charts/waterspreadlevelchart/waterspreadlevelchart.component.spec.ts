import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgChartsModule } from 'ng2-charts';

import { WaterspreadlevelchartComponent } from './waterspreadlevelchart.component';

describe('WaterspreadlevelchartComponent', () => {
  let component: WaterspreadlevelchartComponent;
  let fixture: ComponentFixture<WaterspreadlevelchartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterspreadlevelchartComponent ],
      imports: [ NgChartsModule ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterspreadlevelchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
