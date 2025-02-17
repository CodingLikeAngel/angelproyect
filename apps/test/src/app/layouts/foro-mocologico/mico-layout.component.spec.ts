import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MicoLayoutComponent } from './mico-layout.component';

describe('MicoLayoutComponent', () => {
  let component: MicoLayoutComponent;
  let fixture: ComponentFixture<MicoLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicoLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MicoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
