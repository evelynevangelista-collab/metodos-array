//5. join() - Transformando array em texto
// Une todos os elementos do array em uma única String usando um separador

console.log("=== 5. join() ===");

//Exemplo 1 - separador padrão (vírgula)
const nomes =["Ana", "João", "Carlos"];
console.log("Com separador padrão: ", nomes.join()); // "Ana, João, Carlo"

//Exemplo 2 - escolhendo separador personalizado
console.log("Com hífen:", nomes.join (" - ")); //"Ana - João - Carlos"

//Exemplo 3 - lista de tecnologias
const tecnologias = ["HTML","CSS", "JavaScript", "React" ];
const texto = tecnologias.join(" | ");
console.log("Tecnologias formatadas: ", texto); // "HTML | CSS | JavaScript"