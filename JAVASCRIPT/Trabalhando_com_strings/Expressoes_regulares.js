// Expressões regulares

/*Uma expressão regular é uma forma comum e concisa de representar algum tipo de padrão em texto. 
Você pode usá-las, por exemplo, com o recurso de “Localizar e Substituir” para fazer alterações rapidamente em um grande volume de dados.*/

//Verificando se possue a mesma palavra dentro de uma string
const resultado = /Ruan/g.test( `Ruan Gomes Costa`);

console.log(resultado);