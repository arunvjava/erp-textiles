import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemNameComponent } from './item-name.component';

describe('ItemNameComponent', () => {
  let component: ItemNameComponent;
  let fixture: ComponentFixture<ItemNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
