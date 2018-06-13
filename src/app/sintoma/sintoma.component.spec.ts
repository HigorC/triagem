import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SintomaComponent } from './sintoma.component';

describe('SintomaComponent', () => {
  let component: SintomaComponent;
  let fixture: ComponentFixture<SintomaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SintomaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SintomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
