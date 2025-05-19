import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignationPortComponent } from './designation-port.component';

describe('DesignationPortComponent', () => {
  let component: DesignationPortComponent;
  let fixture: ComponentFixture<DesignationPortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignationPortComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignationPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
