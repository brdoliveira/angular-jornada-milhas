import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-depoimento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-depoimento.component.html',
  styleUrl: './card-depoimento.component.scss'
})
export class CardDepoimentoComponent {
  depoimento: string = `
    Recomendo fortemente a agência de viagens Jornada.
    Eles oferecem um serviço personalizado e de alta qualidade
    que excedeu minhas expectativas em minha última viagem.
  `
  autoria: string = 'Mariana Faustino'
}
