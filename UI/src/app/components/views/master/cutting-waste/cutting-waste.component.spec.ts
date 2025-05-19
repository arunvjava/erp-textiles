import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuttingWasteComponent } from './cutting-waste.component';

describe('CuttingWasteComponent', () => {
  let component: CuttingWasteComponent;
  let fixture: ComponentFixture<CuttingWasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuttingWasteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuttingWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
