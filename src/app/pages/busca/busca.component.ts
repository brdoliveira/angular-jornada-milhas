import { Component, OnInit } from '@angular/core';
import { PassagensService } from 'src/app/core/services/passagens.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit {
  passagens: Passagens[] = []

  constructor(private passagensService: PassagensService) { }
  ngOnInit(): void {
    const filtroPadrao = {
      dataIda: new Date().toISOString(),
      pagina: 1,
      porPagina: 25,
      somenteIda: false,
      passageirosAdultos: 1,
      tipo: 'Executiva'
    }
    this.passagensService.getPassagens(filtroPadrao)
      .subscribe(res => {
        this.passagens = res.resultado;
        console.log(this.passagens);
      })
  }
}