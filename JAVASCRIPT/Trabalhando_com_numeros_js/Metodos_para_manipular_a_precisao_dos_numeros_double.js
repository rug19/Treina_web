// Métodos para manipular a precisção dos números double

// Podemos utilizar o toFixed para trabalhar com casas decimais. 
// Porém o resultado dependendo dos parametros passado será uma string.


const resultado = 10.343234.toFixed(2)

console.log(typeof resultado);

// Podemos transformar o resultado para number utilizado o cosntrutor number.

console.log(typeof Number(resultado) );

// Outra forma é utilizando os valores unarios.

const number =  +34.463783.toFixed(4);

console.log(typeof number);

// Exexmplo 

// Nesse exemplo foi mostrando como podemos trabalhar com casas decimais utilizando o toFixed para ser mais preciso em releção ao resultado.

const valorCombustivel = 7.283;
const valor = valorCombustivel * 100;
const valorSemana = (valorCombustivel * 100) * 52;

console.log(valor.toFixed(2));
console.log(valorSemana.toFixed(2));

