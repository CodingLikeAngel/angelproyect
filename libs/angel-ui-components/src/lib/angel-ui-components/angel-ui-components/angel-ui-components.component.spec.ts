import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngelUiComponentsComponent } from './angel-ui-components.component';

describe('AngelUiComponentsComponent', () => {
  let component: AngelUiComponentsComponent;
  let fixture: ComponentFixture<AngelUiComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngelUiComponentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AngelUiComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
