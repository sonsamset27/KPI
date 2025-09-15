import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiuniversityComponent } from './kpiuniversity.component';

describe('KpiuniversityComponent', () => {
  let component: KpiuniversityComponent;
  let fixture: ComponentFixture<KpiuniversityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KpiuniversityComponent]
    });
    fixture = TestBed.createComponent(KpiuniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
