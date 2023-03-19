import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsInterfaceComponent } from './projects-interface.component';

describe('ProjectsInterfaceComponent', () => {
  let component: ProjectsInterfaceComponent;
  let fixture: ComponentFixture<ProjectsInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
