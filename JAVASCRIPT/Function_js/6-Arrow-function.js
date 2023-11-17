// Arrow Function 

// Para criar uma função basta abrir o parêntesers em seguida o sinal de igual e maior junto com os colchetes

let soma = (a, b) => { 
console.log(a + b);
}

soma(4,5);

// Podemos utiliZzar a palavra return também junto com a arrowfunction para retornar algo

let dividir = (a, b) => {
return a / b;
}

console.log(dividir(6, 2));

// Podemos também simplificar uma arrow function com pequenas funcionalidade como por exemplo um calculo.


let subtrair = (a, b ) => {return a - b} ;

console.log(subtrair(10, 4));

// Uma arrow function já possuem o return embutido, sendo assim em alguns casos quando quisermos simplificar uma função não precisamos utiliza-lo para retornar algo. 

let multiplicar = (a, b) => a * b;

console.log(multiplicar(3, 4));