import { Injectable } from '@angular/core';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  private contatos: Contato[] = [];

  constructor() {}

  existe(c: Contato): boolean {
    const encontrado = this.contatos.find(contato => contato.email === c.email);
    return encontrado !== undefined;
  }

  adicionar(c: Contato): boolean {
    if (!this.existe(c)) {
      this.contatos.push(c);
      return true;
    }
    return false;
  }

  remover(c: Contato): boolean {
    const index = this.contatos.indexOf(c);
    if (index !== -1) {
      this.contatos.splice(index, 1);
      return true;
    }
    return false;
  }

  obterTodos(): Contato[] {
    return this.contatos;
  }
}