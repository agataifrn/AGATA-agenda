import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../model/agenda-service';
import { Contato } from '../model/contato';

@Component({
  selector: 'app-exibe-contatos',
  standalone: true,
  imports: [], 
  templateUrl: './exibe-contatos.html',
  styleUrl: './exibe-contatos.scss'
})
export class ExibeContatos implements OnInit {
  listaDeContatos: Contato[] = [];

  constructor(private agendaService: AgendaService) {}

  ngOnInit() {
    this.listaDeContatos = this.agendaService.obterTodos();
  }

  deletar(contato: Contato) {
    this.agendaService.remover(contato);
  }
}