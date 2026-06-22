import { Injectable } from '@angular/core';
// Importe a interface ou classe Contato de acordo com o seu projeto
import { Contato } from './contato'; 

@Injectable({
  providedIn: 'root' // Isso faz com que o serviço seja global na aplicação
})
export class AgendaService {
  // 1. Array privado que vai armazenar os contatos da agenda de forma centralizada [cite: 12]
  private contatos: Contato[] = [];

  constructor() {}

  /**
   * Verifica se um contato já existe usando o e-mail como chave[cite: 13].
   * O método 'find' percorre o array e retorna o contato se achar o e-mail[cite: 13].
   */
  existe(c: Contato): boolean {
    const encontrado = this.contatos.find(contato => contato.email === c.email);
    // Se 'encontrado' for diferente de undefined, significa que o e-mail já existe [cite: 13]
    return encontrado !== undefined; 
  }

  /**
   * Adiciona um novo contato se ele ainda não existir na agenda[cite: 13].
   * Retorna true se adicionou com sucesso e false caso contrário[cite: 13].
   */
  adicionar(c: Contato): boolean {
    // Usa o método 'existe' que criamos acima para validar [cite: 13]
    if (!this.existe(c)) {
      this.contatos.push(c); // Adiciona no array se não existir [cite: 13]
      return true;
    }
    return false; // Se já existia, não faz nada e avisa que falhou [cite: 13]
  }

  /**
   * Remove um contato existente na agenda utilizando 'indexOf' e 'splice'[cite: 13].
   * Retorna true se removeu e false caso o contato não seja encontrado[cite: 13].
   */
  remover(c: Contato): boolean {
    // Encontra a posição (índice) do objeto dentro do array [cite: 13]
    const index = this.contatos.indexOf(c); 
    
    // Se o index for -1, significa que o contato não foi encontrado
    if (index !== -1) {
      this.contatos.splice(index, 1); // Remove 1 elemento a partir da posição encontrada [cite: 13]
      return true;
    }
    return false;
  }

  /**
   * Devolve toda a lista de contatos armazenada no serviço[cite: 13].
   */
  obterTodos(): Contato[] {
    return this.contatos;
  }
  
}