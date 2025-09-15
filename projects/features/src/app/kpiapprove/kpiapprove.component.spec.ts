import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiapproveComponent } from './kpiapprove.component';

describe('KpiapproveComponent', () => {
  let component: KpiapproveComponent;
  let fixture: ComponentFixture<KpiapproveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KpiapproveComponent]
    });
    fixture = TestBed.createComponent(KpiapproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
