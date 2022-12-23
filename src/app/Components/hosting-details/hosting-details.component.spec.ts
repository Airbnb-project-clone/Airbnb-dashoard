import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingDetailsComponent } from './hosting-details.component';

describe('HostingDetailsComponent', () => {
  let component: HostingDetailsComponent;
  let fixture: ComponentFixture<HostingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostingDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
