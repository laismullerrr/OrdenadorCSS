import rl from 'readline-sync';

function inserirPropriedades() {
  let entrada = (rl.question('Por favor, digite uma propriedade CSS ou "SAIR" para encerrar: ')).toLowerCase();
  if (entrada === 'sair') {
    exibirListaPropriedades();
  } else if (entrada.trim() === '') {
    console.log('Ops, parece que essa entrada é inválida. Por favor, insira uma propriedade CSS ou digite "SAIR" para encerrar.');
    inserirPropriedades();
  } else {
    listaPropriedades.push(entrada);
    inserirPropriedades();
  }
}