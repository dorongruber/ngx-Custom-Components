import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCustomComponentsComponent } from './ngx-custom-components.component';

describe('NgxCustomComponentsComponent', () => {
  let component: NgxCustomComponentsComponent;
  let fixture: ComponentFixture<NgxCustomComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxCustomComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxCustomComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
