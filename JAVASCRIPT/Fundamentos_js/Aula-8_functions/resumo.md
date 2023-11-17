# Resumo Aula 8

## Funções

- Estruturas que nos permitem reutilizar códigos.

## Declaração de Funções
- Use a palavra-chave "function", indique um nome, use parênteses para indicar os parâmetros (variáveis) que a função vai poder receber e abra chaves. Os parâmetros podem receber um valor padrão, que será utilizado caso o programador não passe um valor.

- Funções podem retornar um valor com o comando "return". A função é encerrada assim que o "return" é executado.

````
function soma(num1, num2 = 0){
   return num1 + num2;
}

````

## Funções Anônimas

- São funções que não possuem nome.

## Arrow Functions

- São funções criadas no formato "() => {}". Caso tenha apenas um parâmetro, não é necessário usar parênteses. Caso tenha apenas uma linha, não é necessário usar chaves e nem "return".

## Escopo

- Local onde uma variável vive e, portanto, pode ser acessada.