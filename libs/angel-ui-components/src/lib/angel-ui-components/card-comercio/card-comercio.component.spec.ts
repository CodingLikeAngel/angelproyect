import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComercioComponent } from './card-comercio.component';

describe('CardComercioComponent', () => {
  let component: CardComercioComponent;
  let fixture: ComponentFixture<CardComercioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComercioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComercioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
