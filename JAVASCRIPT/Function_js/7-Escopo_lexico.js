// Escopo léxico

// ESCOPO GLOBAL: significa que podemnos ter acesso a essa variável quando quisermos.
let nome = "Ruan";

function addNome() {
  // ESCOPO LOCAL OU DA FUNÇÃO addNome
  let nome = "Ranna";
  let sobrenome = "Gomes";
  console.log(nome, sobrenome);

  // Quando uma variávael ou função estiver dentro de uma outra função só podera ser executada dentro do escopo da função.
  function novoNome() {
    // ESCOPO DA FUNÇÃO novoNome
    let nome = "Daniel";
    console.log(nome, sobrenome);
  }

  novoNome();
}

addNome();
console.log(nome);
