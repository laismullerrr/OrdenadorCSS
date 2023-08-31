//importação da biblioteca para utilização no projeto
import rl from "readline-sync";

//array vazia para a lista de propriedades a serem inseridas pelo usuário
const listaPropriedades = [];

//função para inserir as propriedades no terminal
function inserirPropriedades() {
  let entrada = rl
    .question('Por favor, digite uma propriedade CSS ou "SAIR" para encerrar: ')
    .toLowerCase();

  //caso o usuário digite 'sair', exibe a lista ordenada
  if (entrada === "sair") {
    exibirListaPropriedades();

  //caso o usuário não insira nada, é exibida a mensagem e refeita a pergunta
  } else if (entrada.trim() === "" ) {
    console.log(
      'Ops, parece que essa entrada é inválida.'
    );
    inserirPropriedades();

    //caso o usuário insira números, é exibida a mensagem e refeita a pergunta
    } else if (!isNaN(entrada)) {
      console.log('Ops, a entrada não pode conter números.');
      inserirPropriedades();

  //caso o usuário insira dados válidos, são inseridos na lista de propriedades
  } else {
    listaPropriedades.push(entrada);
    inserirPropriedades();
  }
}

//função para ordenar a lista por oredem alfabética e imprimi-las no terminal
function exibirListaPropriedades() {

  //ordena a lista orginal em ordem alfabética
  const propriedadesOrdenadas = listaPropriedades.sort();

  //mede o tamanho da lista, para utilizarmos na função seguinte
  const listaPropriedadesVazia = listaPropriedades.length;

  //caso o usuário não inisira nenhum dado e exite o programa, exibe a mensagem no terminal
  if (listaPropriedadesVazia === 0) {
    console.log(
      "Ops, parece que você não inseriu nada por aqui. Agradeçemos por utilizar nosso sistema!"
    );
  
  //caso tudo esteja certo, os dados são ordenados e impressos no terminal com a mensagem 
  } else {
    propriedadesOrdenadas;
    console.log("\nAqui estão suas propriedades ordenadas:");
    listaPropriedades.forEach((propriedade) => {
      console.log("- " + propriedade);
    });
    console.log("\nAgradeçemos por utilizar nosso sistema!");
  }
}

//chamada da primeira função para o programa rodar
inserirPropriedades();
