import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetasLayoutComponent } from './recetas-layout.component';

describe('RecetasLayoutComponent', () => {
  let component: RecetasLayoutComponent;
  let fixture: ComponentFixture<RecetasLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecetasLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecetasLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
