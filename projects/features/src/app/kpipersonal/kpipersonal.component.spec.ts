import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpipersonalComponent } from './kpipersonal.component';

describe('KpipersonalComponent', () => {
  let component: KpipersonalComponent;
  let fixture: ComponentFixture<KpipersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KpipersonalComponent]
    });
    fixture = TestBed.createComponent(KpipersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
