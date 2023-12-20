import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { OnInit } from '@angular/core';
import { Promocao } from 'src/app/core/types/type';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  promocoes!: Promocao[];

  constructor(private servicoPromocao: PromocaoService) {}

  ngOnInit(): void {
    this.servicoPromocao.listar().subscribe(res => {
      this.promocoes = res;
    });
  }
}
