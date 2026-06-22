import { Component, signal } from '@angular/core';
import { AdicionaContatos } from "./adiciona-contatos/adiciona-contatos";
import { ExibeContatos } from "./exibe-contatos/exibe-contatos";
import { Cabecalho } from './cabecalho/cabecalho';

@Component({
  selector: 'app-root',
  imports: [AdicionaContatos, ExibeContatos, Cabecalho],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('agenda');
}
