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

type method = 'GET' | 'POST' | 'DELETE' | 'UPDATE';

function fazerRequisicao(url: string, method: method) {
  return `url: ${url} Método: ${method}`;
}

const url = 'https://www.google.com.br';
const method: method = 'GET';

fazerRequisicao(url, method);

type MathFunction = (n1: number, n2: number) => number;

const somar: MathFunction = (n1, n2) => {
  return n1 + n2;
};

const soma = somar(2, 2);
console.log(soma);

const subtracao: MathFunction = (n1, n2) => {
  return n1 + n2;
};

const menos = subtracao(2, 2);
console.log(menos);

const multiplicacao: MathFunction = (n1, n2) => {
  return n1 + n2;
};

const vezes = multiplicacao(2, 2);
console.log(vezes);

const arrayOfNumbers: Array<number> = [1, 2, 3];

console.log(arrayOfNumbers);

type Character = {
  name: string;
  age: number;
};

const pessoa: Character = {
  name: 'Marcus',
  age: 12,
};

console.log(pessoa);

function nomeCompleto(...arg: string[]): void {
  console.log(arg.join(' '));
}

nomeCompleto('Marcus', 'Evandro', 'Boni');

const object: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: number;
} = {
  chaveA: 'Marcus',
  chaveB: 'Boni',
};

object.chaveB = 'novoValor';

console.log(object);
