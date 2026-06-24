import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AgendaService } from '../model/agenda-service'; 
import { Contato, TipoContato } from '../model/contato';

@Component({
  selector: 'app-adiciona-contatos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './adiciona-contatos.html',
  styleUrl: './adiciona-contatos.scss'
})
export class AdicionaContatos {
  
  opcoesTipo = Object.values(TipoContato);

  formulario = new FormGroup({
    nome: new FormControl('', { validators: [Validators.required], nonNullable: true }),
    telefone: new FormControl('', { validators: [Validators.required], nonNullable: true }),
    email: new FormControl('', { validators: [Validators.required, Validators.email], nonNullable: true }),
    aniversario: new FormControl('', { validators: [Validators.required], nonNullable: true }),
    tipo: new FormControl('', { validators: [Validators.required], nonNullable: true })
  });

  constructor(private agendaService: AgendaService) {}

  salvarContato() {
    if (this.formulario.invalid) {
      alert('Por favor, preencha todos os campos corretamente!');
      return;
    }

    const dadosForm = this.formulario.getRawValue();
    
    const novo: Contato = { 
      nome: dadosForm.nome, 
      telefone: dadosForm.telefone,
      email: dadosForm.email, 
      aniversario: new Date(dadosForm.aniversario), 
      tipo: dadosForm.tipo as TipoContato         
    };
    
    const sucesso = this.agendaService.adicionar(novo);
    
    if (sucesso) {
      alert('Contato adicionado com sucesso!');
      this.formulario.reset(); 
    } else {
      alert('Erro: Este e-mail já existe na agenda!');
    }
  }
}