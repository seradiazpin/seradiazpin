import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalprojectsComponent } from './personalprojects.component';

describe('PersonalprojectsComponent', () => {
  let component: PersonalprojectsComponent;
  let fixture: ComponentFixture<PersonalprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
