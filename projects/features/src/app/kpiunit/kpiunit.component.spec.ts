import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiunitComponent } from './kpiunit.component';

describe('KpiunitComponent', () => {
  let component: KpiunitComponent;
  let fixture: ComponentFixture<KpiunitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KpiunitComponent]
    });
    fixture = TestBed.createComponent(KpiunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
