import funcao from './mod';

funcao();

// os arquivos .ts são transpilados para .js na pasta dist

type NomeCompleto = number | string;

const nome: NomeCompleto = 'Marcus';

console.log(nome);

interface objeto {
  nome: string;
  idade: number;
  lastName: string;
}

function resumo(usuario: objeto) {
  return `Olá ${usuario.nome}, você tem ${usuario.idade} anos`;
}

console.log(
  resumo({
    nome: 'Marcus',
    idade: 19,
    lastName: 'Boni',
  }),
);

function showText(text: string, align: 'center' | 'left' | 'right') {
  return `<div style="text-align: ${align}">${text}</div>`;
}

showText('Marcus', 'center');
showText('Marcus', 'left');
showText('Marcus', 'right');

type trueOrFalse = true | false;

function temNome(nome: string): trueOrFalse {
  return nome ? true : false;
}

console.log(temNome('hj'));
