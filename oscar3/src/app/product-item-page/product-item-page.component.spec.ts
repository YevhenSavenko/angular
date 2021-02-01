import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemPageComponent } from './product-item-page.component';

describe('ProductItemPageComponent', () => {
  let component: ProductItemPageComponent;
  let fixture: ComponentFixture<ProductItemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductItemPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
