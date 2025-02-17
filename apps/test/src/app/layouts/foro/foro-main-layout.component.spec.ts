import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForoMainLayoutComponent } from './foro-main-layout.component';

describe('ForoMainLayoutComponent', () => {
  let component: ForoMainLayoutComponent;
  let fixture: ComponentFixture<ForoMainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForoMainLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ForoMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
