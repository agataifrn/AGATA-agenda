import { Component } from '@angular/core';
import { AgendaService } from '../model/agenda-service';
import { Contato } from '../model/contato';

@Component({
  selector: 'app-exibe-contatos',
  standalone: true,
  imports: [], // Sem dependência de CommonModule devido ao novo Control Flow do Angular
  templateUrl: './exibe-contatos.html',
  styleUrl: './exibe-contatos.scss'
})
export class ExibeContatos {

  constructor(private agendaService: AgendaService) {}

  /**
   * Getter dinâmico que recupera a lista atualizada do serviço em tempo real.
   * Elimina completamente a necessidade do ciclo de vida ngOnInit.
   */
  get listaDeContatos(): Contato[] {
    return this.agendaService.obterTodos();
  }

  deletar(contato: Contato) {
    this.agendaService.remover(contato);
  }
}