import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SenderismoLayoutComponent } from './senderismo-layout.component';

describe('SenderismoLayoutComponent', () => {
  let component: SenderismoLayoutComponent;
  let fixture: ComponentFixture<SenderismoLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenderismoLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SenderismoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
