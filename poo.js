// poo.js - POO auditada por IA (Copilot)
// Autor: João Martinelli | 2BTi

class Prato {
  #nome;
  #preco;
  #imagem;

  constructor(nome, preco, imagem) {
    this.#nome = nome;
    this.#preco = preco;
    this.#imagem = imagem;
  }

  get nome() { return this.#nome; }
  get preco() { return this.#preco; }
  get imagem() { return this.#imagem; }
}

class Restaurante {
  constructor(nome, endereco) {
    this.nome = nome;
    this.endereco = endereco;
    this.cardapio = [];
  }

  adicionarPrato(prato) {
    this.cardapio.push(prato);
  }
}

export { Restaurante, Prato };

// Copilot, o que é 'this' neste contexto?
// R: 'this' referencia o objeto atual criado a partir da classe, permitindo acessar seus atributos e métodos.
