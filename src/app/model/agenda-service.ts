import { Injectable } from '@angular/core';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  // Array privado que centraliza o armazenamento dos contatos
  private contatos: Contato[] = [];

  constructor() {}

  /**
   * Verifica se um contato já existe usando o e-mail como chave única.
   */
  existe(c: Contato): boolean {
    const encontrado = this.contatos.find(contato => contato.email === c.email);
    return encontrado !== undefined;
  }

  /**
   * Adiciona um novo contato caso o e-mail não esteja duplicado.
   */
  adicionar(c: Contato): boolean {
    if (!this.existe(c)) {
      this.contatos.push(c);
      return true;
    }
    return false;
  }

  /**
   * Remove o contato usando indexOf para achar o índice e splice para recortá-lo do array.
   */
  remover(c: Contato): boolean {
    const index = this.contatos.indexOf(c);
    if (index !== -1) {
      this.contatos.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   * Devolve toda a lista de contatos viva para quem solicitar.
   */
  obterTodos(): Contato[] {
    return this.contatos;
  }
}