import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';

@Component({
  selector: 'app-form-busca',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-busca.component.html',
  styleUrl: './form-busca.component.scss'
})
export class FormBuscaComponent {
  constructor(
    public dialog: MatDialog,
    public formBuscaService: FormBuscaService
  ) {}

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%'
    })
  }
}
