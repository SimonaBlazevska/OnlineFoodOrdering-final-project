import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleeComponent } from './titlee.component';

describe('TitleeComponent', () => {
  let component: TitleeComponent;
  let fixture: ComponentFixture<TitleeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleeComponent]
    });
    fixture = TestBed.createComponent(TitleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
