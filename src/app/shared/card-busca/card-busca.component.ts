import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Promocao } from 'src/app/core/types/type';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card-busca',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-busca.component.html',
  styleUrl: './card-busca.component.scss'
})
export class CardBuscaComponent {
  @Input() promocao!: Promocao;
}
