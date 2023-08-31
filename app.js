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

const listaPropriedades = [];
function exibirListaPropriedades() {
  
  const propriedadesOrdenadas = listaPropriedades.sort();
  const listaPropriedadesVazia = listaPropriedades.length;

  if (listaPropriedadesVazia === 0) {
    console.log('Ops, parece que você não inseriu nada por aqui.');
  } else {
      propriedadesOrdenadas; 
      console.log('\nAgradeçemos por utilizar nosso sistema. Aqui estão suas propriedades ordenadas:');
      listaPropriedades.forEach((propriedade) => {
        console.log(propriedade);
      });
    }
  }

inserirPropriedades()