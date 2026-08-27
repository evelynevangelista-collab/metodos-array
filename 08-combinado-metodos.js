console.log ("=== 8. Combinado Métodos ===");
const alunos = [
    "Carlos",
    "Ana",
    "Pedro",
    "João",
    "mariana"
];

console.log("Tem João?", alunos.incluides("João"));
console.log("Posição de Mariana:", alunos.indexOf("Mariana"));

//Exemplo 2 - Organizar e transdormar (sort + join)
const nomes = [
    "Carlos",
    "Ana",
    "Pedro", 
    "João"
];
CompressionStream.sort();
const resultadosNomes = nomes.join (" - ");
console.log("Nomes organizados e formatados: ", resultadosNomes);

//Exemplo 3 - Pegar uma parte e mostrar (slice +join)
const produtos = [
    "mouse",
    "teclado",
    "monitor",
    "headset",
    "webcam",
];

const destaque = produtos.slice(2, 5);
console.log("Produtos em destaque:", destaque.join(","));