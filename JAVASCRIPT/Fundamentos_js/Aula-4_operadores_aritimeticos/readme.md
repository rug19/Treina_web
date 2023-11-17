# Resumo da Aula 4 - Operadores 

## O que são operadores?

- Elementos que nos permitem realizar operações.

## Operadores Lógicos

 - Nos ajudam a definir se um conjunto de regras resulta em uma expressão verdadeira ou falsa. São para comparações E (&&) e OU (||).


| A | B | A "E" B | A "OU" B |
|--- |--- |--- |--- |
| true | true | true | true |
| true | false | false | true |
| false | true | false | true |
| false | false | false | false |

## Operadores Aritméticos

- Usados para cálculos.

| Operador | Descrição | Exemplo | Resutado |
|--- |--- |--- |--- |
| + (adição) |faz a soma entre dois números | 1 + 2 | 3 |
| -(subtração) | faz a subtração entre dois números | 3 - 1 | 2 |
| * (multiplicação) |faz a multiplicação entre dois números | 5 * 3 | 15 |
| / (divisão) | faz a divisão entre dois números| 8 / 2 | 4|
| % (módulo) | retorna o resto da divisão de dois números| 5 % 2 | 1|
| ** (potenciação) | multiplica um número sucessivas vezes| 2 ** 3 | 8|

## Operadores de Igualdade

| Operador | Descrição | Exemplo |
|--- |--- |--- |
| == | Verifica se dois valores são iguais. Faz conversão de tipo automaticamente. | 3 == "3" |
| != | Verifica se dois valores são diferentes, ignorando o tipo | 4 != 6 |
| === | Verifica se dois valores são iguais e do mesmo tipo | 3 === 9 |
| !== | Verifica se dois valores são diferentes, incluindo o tipo | "abc" !== "def" |

## Operadores Relacionais

| Operador | Descrição | Exemplo |
|--- |--- |--- |
| <= | Verifica se um valor é menor ou igual | 3 <= 5 |
| >= | Verifica se um valor é maior ou igual | 4 >= 4 |
| < | Verifica se um valor é menor | 3 < 9 |
| > | Verifica se um valor é maior | 8 > 2 | 

## Concatenação de Strings

- Podemos juntar strings com o "+":

```
let meuNome = "Akira"
"Olá, " + meuNome + "!";
//resultado: "Olá, Akira!";

```
## Operadores Unários
- Operadores que precisam de um elemento para funcionar.

| Operador | Descrição | Exemplo |
|--- |--- |--- |
| - | Inverte o sinal de um número | -5 |
| ! | Nega algo, invertendo os valores de true e false | !true |
| typeof | Retorna o tipo do valor | typeof 7 |

## Operador Ternário

- Nos permite fazer tomadas de decisões simples. É formado por três partes:

* Condição
* Expressão a ser executada caso a condição seja verdadeira
* Expressão a ser executada caso a condição seja falsa.

```
3 > 8 ? 'É maior' : 'É menor'

```
