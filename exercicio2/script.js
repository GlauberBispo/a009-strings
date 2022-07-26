const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
console.log(minhaString);
console.log(`A string tem ${minhaString.length} caracteres`);
const novaString = minhaString.trim();
console.log(`Após retirar os espaços inúteis temos ${novaString.length} caracteres.`);
const stringSticioso = novaString.replaceAll("________", "sticioso");
console.log (`Substituindo os \"________\" por sticioso fica:\n ${stringSticioso}.`)
