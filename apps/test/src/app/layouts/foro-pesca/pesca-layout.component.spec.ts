import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PescaLayoutComponent } from './pesca-layout.component';

describe('PescaLayoutComponent', () => {
  let component: PescaLayoutComponent;
  let fixture: ComponentFixture<PescaLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PescaLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PescaLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
