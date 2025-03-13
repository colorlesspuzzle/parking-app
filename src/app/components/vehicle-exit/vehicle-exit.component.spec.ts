import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleExitComponent } from './vehicle-exit.component';

describe('VehicleExitComponent', () => {
  let component: VehicleExitComponent;
  let fixture: ComponentFixture<VehicleExitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleExitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
