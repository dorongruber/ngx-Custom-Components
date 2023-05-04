import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassDialogComponent } from './glass-dialog.component';

describe('GlassDialogComponent', () => {
  let component: GlassDialogComponent;
  let fixture: ComponentFixture<GlassDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlassDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlassDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
