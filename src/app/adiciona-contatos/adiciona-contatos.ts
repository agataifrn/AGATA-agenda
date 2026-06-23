import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AgendaService } from '../model/agenda-service'; 
import { Contato } from '../model/contato';

@Component({
  selector: 'app-adiciona-contatos',
  standalone: true,
  imports: [ReactiveFormsModule], // Habilita o uso de formulários reativos
  templateUrl: './adiciona-contatos.html',
  styleUrl: './adiciona-contatos.scss'
})
export class AdicionaContatos {
  
  // Estrutura declarativa do formulário com regras de validação
  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private agendaService: AgendaService) {}

  salvarContato() {
    // Impede o envio se o formulário violar as validações (ex: e-mail sem @)
    if (this.formulario.invalid) {
      alert('Por favor, preencha todos os campos corretamente!');
      return;
    }

    const dadosForm = this.formulario.value;
    
    // Casting seguro usando 'as Contato' para evitar erros estritos do compilador ngc
    const novo = { 
      nome: dadosForm.nome ?? '', 
      email: dadosForm.email ?? '' 
    } as Contato;
    
    const sucesso = this.agendaService.adicionar(novo);
    
    if (sucesso) {
      alert('Contato adicionado com sucesso!');
      this.formulario.reset(); // Limpa as caixas de texto do formulário nativamente
    } else {
      alert('Erro: Este e-mail já existe na agenda!');
    }
  }
}