import { Component } from '@angular/core';
import { AgendaService } from '../model/agenda-service';
import { Contato } from '../model/contato';

@Component({
  selector: 'app-exibe-contatos',
  standalone: true,
  imports: [], 
  templateUrl: './exibe-contatos.html',
  styleUrl: './exibe-contatos.scss'
})
export class ExibeContatos {

  constructor(private agendaService: AgendaService) {}

  get listaDeContatos(): Contato[] {
    return this.agendaService.obterTodos();
  }

  deletar(contato: Contato) {
    this.agendaService.remover(contato);
  }
}