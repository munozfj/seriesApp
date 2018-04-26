import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleInfoComponent } from './little-info.component';

describe('LittleInfoComponent', () => {
  let component: LittleInfoComponent;
  let fixture: ComponentFixture<LittleInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LittleInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LittleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
