//4. splice() - "Vou mexer no array"
// Sintaxe: array.splice(podição, quantidade_a_remover, ...itens_para_adicionar)
// Importante: ALTERA o próprio array original!

console.log("===4. splice() ===");

//Exemplo 1 - remover 1 item a partir do ídice 1
const frutas = ["Maçã", "Banana", "Laranja", "Uva"];
frutas.splice(1, 1); //Remove 1 item na posição 1 ("Banana")
console.log("Após remover Banana:", frutas); //["Maçã", "laranja", "Uva"]

//Exemplo 2 - remover dois itens 
const numeros = [10, 20, 30, 40, 50];
numeros.splice(1, 2); //remove 2 itens a partir do índice 1 (20 e 30)
console.log("Após remover dois numeros:", numeros); //[10, 40, 50]

//Exemplo 3 - adicionar sem remover nenhum (quantidade = 0)
const frutas2 = ["Maçã", "Banana", "Uva"];
frutas2.splice(2, 0, "Laranja"); //Na posição 2, remove o 0 e adiciona "Laranja"
console.log("Após adicionar Laranja na posição 2:", frutas2); //["Maçã", "Banana", "Laranja", "Uva"]

//Exemplo 4 -