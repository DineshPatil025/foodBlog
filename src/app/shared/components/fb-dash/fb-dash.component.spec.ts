import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbDashComponent } from './fb-dash.component';

describe('FbDashComponent', () => {
  let component: FbDashComponent;
  let fixture: ComponentFixture<FbDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FbDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
