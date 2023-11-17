// Atribuir funções a uma variável 

function myFunction(numero1, numero2){
    let resultado = numero1 * numero2
    return resultado
}


// A variavel resultado passará a ser uma função

let resultado = myFunction;
 console.log(resultado(5, 6)); 

// Podemos passar a função para varias variáveis

function dividir(a, b){
    console.log(a, 'divido por', b);
    let divisao = a / b;
    return divisao
}

let outraFunction1 = dividir;

let outraFunction2 = dividir;

let divisao1 = outraFunction1(10,2);

let divisao2 = outraFunction2(9, 3);

console.log(`A divisao de a: ${divisao1} e a divisao de b: ${divisao2}`);