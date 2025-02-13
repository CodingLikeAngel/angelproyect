import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  @Input() label = '';
  @Input() checked = false;
  @Output() changes = new EventEmitter<boolean>();

  onChange(event: any): void {
    this.changes.emit(event.target.checked);
  }
}
