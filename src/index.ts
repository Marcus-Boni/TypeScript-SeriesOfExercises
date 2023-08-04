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

function multiplicaArgs(...args: Array<number>) {
  return args.reduce((acc, valor) => acc * valor, 1);
}

const result = multiplicaArgs(1, 2, 3, 4);

console.log(result);

const dadosCliente: readonly [number, string, ...string[]] = [1, '']; // aparentemente o rest operator torna opcional
const array2: ReadonlyArray<string> = ['Marcus', 'Boni'];

console.log(dadosCliente);
console.log(array2);

interface Person {
  name: string;
  lastName?: string;
}

export function createPerson(name: string, lastName?: string): Person {
  return {
    name,
    lastName,
  };
}

const person1 = createPerson('Marcus');

console.log(person1);

export const squareOf = (x: unknown) => {
  if (typeof x === 'number') return x * x;
  return null;
};

let x: unknown;
const y = 200;

x = 200;
x = 10;

if (typeof x === 'number') console.log(x + y);

const addOrConcat = (a: string | number, b: string | number) => {
  if (typeof a === 'number' && b === 'number') return a + b;
  return `${a}${b}`;
};

console.log(addOrConcat('aa', 'bb'));

let z = 10; //eslint-disable-line
const teste = 'sim';

console.log(teste);

const person = {
  nome: 'Marcus' as const,
  sobrenome: 'Boni',
};

person.nome = 'Marcus';

console.log(person);

enum sim {
  V = 'Vermelho',
}

enum sim {
  A = 'Azul',
}

console.log(sim);

type Pessoa = {
  nome: string;
  idade: number;
  salario: number;
  corPreferida?: string;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

const somebody: Pessoa = {
  nome: 'Marcus',
  idade: 19,
  salario: 200_000,
};

export function setFavoriteColor(pessoa: Pessoa, cor: CorPreferida) {
  return { ...pessoa, corPreferida: cor };
}

console.log(setFavoriteColor(somebody, 'Azul'));

type TemNome = { nome: string };
type TemIdade = { idade: number };
type TemCasa = { localidade: boolean };

type Intersection = TemNome | TemCasa | TemIdade;

const person2: Intersection = {
  nome: 'Marcus',
};

console.log(person2);

type CallableFunction = (item: string) => string;

export const mapStrings = (array: string[], callbackfn: CallableFunction): string[] => {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callbackfn(item));
  }

  return newArray;
};

const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, (item) => item.toUpperCase());

console.log(abcMapped);

type User = {
  name: string;
  id: number;
};

type Admin = {
  isAdmin: true;
  level: 0 | 1 | 2;
};

type UserAdmin = User & Admin;

const marcus: UserAdmin = {
  name: 'Marcus',
  id: 1,
  isAdmin: true,
  level: 0,
};

console.log(marcus);

type RowProps = [colOne: number, colTwo: string];

const array: RowProps = [12, ''];

console.log(array);

type FruitsProps = 'banana' | 'limao';

type FruitCountProps = {
  [key in FruitsProps]: string;
};

export const fruits: FruitCountProps = {
  banana: 'banana',
  limao: 'limao',
};

class Empresa {
  public readonly nome: string;
  protected readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string; // A diferença entre private e protected é que private é somente acessível na class pai(super)
  // e protected permite as subclasses acessarem também
  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('sim', '11.002.111/0001-11');
const colaborador1 = new Colaborador('Marcus', 'Boni');
// empresa1.adicionaColaborador({ nome: 'marcus', sobrenome: 'boni' });
empresa1.adicionaColaborador(colaborador1);
console.log(empresa1);
console.log(colaborador1);

export class Guy {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    private readonly idade: number, //encapsulamento: não permite que a propriedade seja acessada fora da classe
    private readonly cpf: number,
  ) {}

  getNome(): string {
    return this.nome;
  }
  getIdade(): number {
    return this.idade;
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Guy {
  getNomeCompleto() {
    //Polimorfismo: Capacidade de sobrescrever o método da classe pai na classe filha
    return `Aluno ${this.nome} ${this.sobrenome}`;
  }
}

export class Cliente extends Guy {
  getNomeCompleto() {
    return `Cliente ${this.nome} ${this.sobrenome}`;
  }
}

const aluno = new Aluno('Marcus', 'Boni', 19, 23784);
const cliente = new Cliente('Marcus', 'Boni', 19, 23784);

console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.111.111/0001-11');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

const empresa2 = new Udemy();

console.log(empresa2);

export class Someone {
  static idadePadrao = 10;
  static cpfPadrao = '999-111-222.23';
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public _cpf: string,
  ) {}

  static criaPessoa(nome: string, sobrenome: string): Someone {
    return new Someone(nome, sobrenome, Someone.idadePadrao, Someone.cpfPadrao);
  }

  get cpf(): string {
    return this._cpf;
  }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }
}

const someone = new Someone('Marcus', 'Boni', 20, '222-222-333.22');
someone.cpf = '111';

console.log(someone);
