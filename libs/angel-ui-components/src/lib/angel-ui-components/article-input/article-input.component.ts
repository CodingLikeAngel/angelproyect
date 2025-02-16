import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-article-input',
  templateUrl: './article-input.component.html',
  styleUrls: ['./article-input.component.scss']
})
export class ArticleInputComponent {
  @Input() value = '';
  @Input() placeholder = 'Escribe tu artículo aquí...';
  @Input() rows = 10;
  @Input() cols = 50;
  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    this.value = target.value;
    this.valueChange.emit(this.value);
  }
}
