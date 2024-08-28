import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
    declarations: [
        CadastroComponent,
        LoginComponent,
        PerfilComponent
    ],
    imports: [
        CommonModule,
        CadastroComponent,
        LoginComponent,
        PerfilComponent
    ]
})
export class AutenticacaoModule { }