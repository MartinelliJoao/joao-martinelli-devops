// app.js - Controlador principal do front-end
// Autor: João Martinelli | 2BTi
// Objetivo: Demonstrar POO e interação com DOM de forma profissional

import { Restaurante, Prato } from "./poo.js";

// Botão para mostrar cardápio
document.getElementById("btnMostrar").addEventListener("click", () => {
  // Criando o restaurante
  const restaurante = new Restaurante("Restaurante DevOps", "Rua Principal, 123");

  // Adicionando pratos com nome, preço e imagem
  restaurante.adicionarPrato(new Prato("Burger Premium", 29.9, "assets/burger.jpg"));
  restaurante.adicionarPrato(new Prato("Pizza 4 Queijos", 42.5, "assets/pizza.jpg"));
  restaurante.adicionarPrato(new Prato("Risoto de Camarão", 54.9, "assets/risoto.jpg"));
  restaurante.adicionarPrato(new Prato("Sobremesa Brownie", 19.5, "assets/brownie.jpg"));

  // Renderizando os pratos no container
  const conteudoDiv = document.getElementById("conteudo");
  conteudoDiv.innerHTML = restaurante.cardapio.map(prato => `
    <div class="card">
      <img src="${prato.imagem}" alt="${prato.nome}">
      <h3>${prato.nome}</h3>
      <p>R$ ${prato.preco.toFixed(2)}</p>
    </div>
  `).join("");
});
