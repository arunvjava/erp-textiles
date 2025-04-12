import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDynamicFormComponent } from './master-dynamic-form.component';

describe('MasterDynamicFormComponent', () => {
  let component: MasterDynamicFormComponent;
  let fixture: ComponentFixture<MasterDynamicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterDynamicFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
