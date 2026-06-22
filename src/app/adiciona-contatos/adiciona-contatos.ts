import { Component } from '@angular/core';
import { AgendaService } from '../model/agenda-service'; 
import { Contato } from '../model/contato';

@Component({
  selector: 'app-adiciona-contatos',
  standalone: true,
  imports: [], // Sem dependências extras como FormsModule
  templateUrl: './adiciona-contatos.html',
  styleUrl: './adiciona-contatos.scss'
})
export class AdicionaContatos {

  constructor(private agendaService: AgendaService) {}

  salvarContato(nome: string, email: string) {
    if (!nome || !email) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    const novo: Contato = { nome, email };
    const sucesso = this.agendaService.adicionar(novo);
    
    if (sucesso) {
      alert('Contato adicionado com sucesso!');
    } else {
      alert('Erro: Este e-mail já existe na agenda!');
    }
  }
}