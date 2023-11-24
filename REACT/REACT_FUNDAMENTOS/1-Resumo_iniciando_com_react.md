# Conhecendo o React

## O que é React?

O React é uma biblioteca criada pelo Facebook para se criar interfaces de usuário baseadas em componentes.

O React usa uma cópia do DOM em memória (Virtual DOM) para fazer modificações, acessando o DOM o menor número de vezes possível.

## Principais funções

Podemos criar elementos com "React.createElement()", onde passamos o nome do elemento, um objeto com propriedades e o conteúdo do elemento.

````
React.createElement('h1', {id: "meuTitulo"}, "Hello World!"),

````
Iniciamos o React executando "ReactDOM.render()", passando primeiro um elemento a ser renderizado e um elemento onde iremos inserir tal elemento.

````
ReactDOM.render(
    React.createElement('h1', {id: "meuTitulo"}, "Hello World!"),
    document.querySelector("#minhaDiv")
);

````