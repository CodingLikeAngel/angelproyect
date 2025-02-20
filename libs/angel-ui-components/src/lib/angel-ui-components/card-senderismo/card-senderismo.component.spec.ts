import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardSenderismoComponent } from './card-senderismo.component';

describe('CardSenderismoComponent', () => {
  let component: CardSenderismoComponent;
  let fixture: ComponentFixture<CardSenderismoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSenderismoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardSenderismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
