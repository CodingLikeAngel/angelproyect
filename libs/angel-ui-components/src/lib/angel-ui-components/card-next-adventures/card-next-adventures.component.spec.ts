import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardNextAdventuresComponent } from './card-next-adventures.component';

describe('CardNextAdventuresComponent', () => {
  let component: CardNextAdventuresComponent;
  let fixture: ComponentFixture<CardNextAdventuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardNextAdventuresComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardNextAdventuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
