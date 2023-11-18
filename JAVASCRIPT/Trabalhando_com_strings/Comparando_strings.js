// Comparação no Js


// Comparação de letras em ordem alfabetica iremos ter um valor negativo
console.log('a'.localeCompare('d', 'pt-br'));

//Comparação de letras ao contrario iremos ter um valor positivo.
console.log('b'.localeCompare('a', 'pt-br'));

//Podemos utilizar para números também 
console.log('2'.localeCompare('10', undefined, {numeric: true}))

// Comparando com o sinal de maior
console.log('a' > 'b');