import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cta-button',
  imports: [CommonModule, TranslateModule],
  templateUrl: './cta-button.html',
  styleUrl: './cta-button.scss',
})
export class CtaButton {
  @Input() text: string = '';
  @Input() href: string = '';
  @Input() translateKey: string = '';
  @Input() type: 'link' | 'submit' = 'link';
  @Input() disabled: boolean = false;
  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit();
  }
}
