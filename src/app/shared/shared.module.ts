import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { CardComponent } from './card/card.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { CardBuscaComponent } from './card-busca/card-busca.component';
import { CardDepoimentoComponent } from './card-depoimento/card-depoimento.component';
import { FormBuscaComponent } from './form-busca/form-busca.component';
import { ModalComponent } from './modal/modal.component';
import { BotaoControleComponent } from './botao-controle/botao-controle.component';
import { DropdownUfComponent } from './dropdown-uf/dropdown-uf.component';
import { SeletorPassageiroComponent } from './seletor-passageiro/seletor-passageiro.component';
import { FormBaseComponent } from './form-base/form-base.component';
import { PassagemComponent } from './passagem/passagem.component';
import { ParadasComponent } from './form-busca/filtros-complementares/paradas/paradas.component';
import { CompanhiasComponent } from './form-busca/filtros-complementares/companhias/companhias.component';
import { PrecosComponent } from './form-busca/filtros-complementares/precos/precos.component';
import { LabelComponent } from './form-busca/filtros-complementares/label/label.component';
import { FiltrosComplementaresComponent } from './form-busca/filtros-complementares/filtros-complementares.component';
import { PassagemDestaqueComponent } from './passagem-destaque/passagem-destaque.component';
import { MaterialModule } from '../core/material/material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HeaderComponent,
    BannerComponent,
    CardComponent,
    ContainerComponent,
    FooterComponent,
    CardBuscaComponent,
    CardDepoimentoComponent,
    FormBuscaComponent,
    ModalComponent,
    BotaoControleComponent,
    DropdownUfComponent,
    SeletorPassageiroComponent,
    FormBaseComponent,
    PassagemComponent,
    ParadasComponent,
    CompanhiasComponent,
    PrecosComponent,
    LabelComponent,
    FiltrosComplementaresComponent,
    PassagemDestaqueComponent
  ]
})
export class SharedModule { }
