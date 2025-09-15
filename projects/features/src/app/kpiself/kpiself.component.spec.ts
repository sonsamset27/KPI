import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiselfComponent } from './kpiself.component';

describe('KpiselfComponent', () => {
  let component: KpiselfComponent;
  let fixture: ComponentFixture<KpiselfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KpiselfComponent]
    });
    fixture = TestBed.createComponent(KpiselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
