//7. sort() - Organizando
//Ordena os elementos do array (por padrão como texto/ordem alfabética).

console.log("=== 7. sort() ===");

//Exemplo 1 - nomes(ordem alfabética)
const nomes = ["Carlos", "Ana", "Pedro", "Bruno"];
nomes.sort();
console.log("Nomes ordenados:", nomes);

//Exemplo 2 - cidades (ordem alfabética)
const cidades = ["São Paulo", "Campinas", "Valinhos", "Valinhos", "Vinhedo"];
cidades.sort();
console.log("Cidades ordenadas: ", cidades);

//Exemplos 3 - Numeros 
const numeros = [10, 2, 30 , 5];
//Se usarmos apenas numeros.sort()
//O JS converte para texto e ordena como string ("10", "2", "30", "5"), dando
numeros.sort