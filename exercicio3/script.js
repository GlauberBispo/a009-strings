//Crie a const para a frase aqui

const casaDeJorge = `Jorge tem uma casa verde e com portão\n azul, com os dizeres: \"BOAS VINDAS, mas\n não deixe o gato sair\"`
console.log(casaDeJorge)
const mudancaDeCor = casaDeJorge.replace("verde","rosa");
console.log(mudancaDeCor)
const mudancaDeCor2 = mudancaDeCor.replace("azul","laranja");
console.log(mudancaDeCor2);
console.log(`A nova string tem a palavra verde?: ${mudancaDeCor2.includes("verde")}\nA nova string possui a palavra laranja? ${mudancaDeCor2.includes("laranja")}`);
const gatoMaiusculo = mudancaDeCor2.replace("mas","MAS").replace("não", "NÃO").replace("deixe","DEIXE").replace("o gato sair","O GATO SAIR");
console.log(gatoMaiusculo);
