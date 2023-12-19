import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-botao-controle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './botao-control.component.html',
  styleUrl: './botao-control.component.scss'
})
export class BotaoControlComponent {
  @Input() operacao: 'incrementar' | 'decrementar' = "incrementar";
  @Input() src = '';
  @Input() alt = '';
}
