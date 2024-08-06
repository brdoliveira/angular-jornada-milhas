import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-controle',
  templateUrl: './botao-control.component.html',
  styleUrls: ['./botao-control.component.scss']
})
export class BotaoControleComponent {
  @Input() operacao: 'incrementar' | 'decrementar' = "incrementar";
  @Input() src = '';
  @Input() alt = '';
}
