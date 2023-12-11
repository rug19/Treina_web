// Tipo BigInt (Valores Grandes)

//Para armazenarmos números maiores podemos utilizar o metodo BigInt represetado pela letra n ao final do número.

// const maiorNumero = BigInt(Number.MAX_SAFE_INTEGER);

// console.log(maiorNumero * 2n)

// Ao somar mais um número com o número maior, podemos vê que o número não é acrescetado, pois esse número já é o limite.

const bigNumber = Number.MAX_SAFE_INTEGER;

console.log(bigNumber + 1);
console.log(bigNumber + 2);

// Comparado o valor número maior + 1 com o outro número maior + vimos que o resultado foi true, pois o valor dos dois não foi alterado, pois já o limite do número. 
console.log(bigNumber + 1 === bigNumber + 2);

// Podemos ultrapassar o limite máximo do número utilizando metodo BigInt.

const maiorNumero = BigInt(Number.MAX_SAFE_INTEGER);

console.log(maiorNumero + 1n);
console.log(maiorNumero + 2n);

// Porém ao utilizar o metódo BigInt podemos ultrapassar o limite do número. 
console.log(maiorNumero + 1n === maiorNumero + 2n);



