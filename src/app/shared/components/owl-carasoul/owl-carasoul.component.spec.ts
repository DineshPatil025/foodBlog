import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlCarasoulComponent } from './owl-carasoul.component';

describe('OwlCarasoulComponent', () => {
  let component: OwlCarasoulComponent;
  let fixture: ComponentFixture<OwlCarasoulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwlCarasoulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwlCarasoulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
