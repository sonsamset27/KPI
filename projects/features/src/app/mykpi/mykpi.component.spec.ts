import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MykpiComponent } from './mykpi.component';

describe('MykpiComponent', () => {
  let component: MykpiComponent;
  let fixture: ComponentFixture<MykpiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MykpiComponent]
    });
    fixture = TestBed.createComponent(MykpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
