//3. slice() - "Quero só uma parte"
//sintaxe: array.slice(início, fim) -> O índice final NÃO entra.
//Importante: slice() cria uma cópia/novo array, NÃO altera o original.

console.log("=== 3. slice() ===");

//Exemplo 1 - produtos
const produtos = [
    "Mouse",  //0
    "Teclado",  // 1
    "Monitor",  // 2
    "Headset"   // 3
];

const produtosSelecionados = produtos.slice(1, 3);
console.log("Produtos selecionados (1 a 3):", produtosSelecionados); //["Teclado", "Monitor"]

//Exemplo 2 - primeiros elementos
const numeros = [10, 20, 30, 40, 50];
const primeirosTres = numeros.slice(0, 3);
console.log("Primeiros três numeros:", primeirosTres); //[10, 20, 30]

//Exemplo 3 - do índice até o final (sem passat o 2° parâmetro)
const aPartirDoIndiceDois = numeros.slice(2);
console.log("Do índice 2 até o final:", aPartirDoIndiceDois); //[30, 40, 50]

//Exemplo 4 - mostrando que NÃO altera o array original
const frutas = ["Maçã", "Banana", "Laranja", "Uva"];
const novasFrutas = frutas.slice(1, 3);

console.log("Array original (intacto):", frutas);      //["Maçã, "Banana", "Laranja", "Uva"]
console.log("Novo array fatiado:", novasFrutas);       //["Banana", "Laranja"]

//fim