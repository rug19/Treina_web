// Formatando números e moeda

// Podemos formatar um número para moeda real podemos utilizar o método toLocalString.

const n1 = 1_530.50;


// Pega pelo sistema operacional.
const resultado = n1.toLocaleString();

console.log(resultado);

// Podemos definir qual pais de moeda que deseja formatar.
// É possivel também configurar para sair com o cinfrão.

const valor = n1.toLocaleString('en-US', {style: 'currency', currency: 'USD'  });

console.log(valor);