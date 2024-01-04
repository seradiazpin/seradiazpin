import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent2 } from './about-component.component';

describe('AboutComponentComponent', () => {
  let component: AboutComponent2;
  let fixture: ComponentFixture<AboutComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent2]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
