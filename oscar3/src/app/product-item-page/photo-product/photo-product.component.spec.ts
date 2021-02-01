import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoProductComponent } from './photo-product.component';

describe('PhotoProductComponent', () => {
  let component: PhotoProductComponent;
  let fixture: ComponentFixture<PhotoProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
