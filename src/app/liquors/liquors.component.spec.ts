import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquorsComponent } from './liquors.component';

describe('LiquorsComponent', () => {
  let component: LiquorsComponent;
  let fixture: ComponentFixture<LiquorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiquorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiquorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
