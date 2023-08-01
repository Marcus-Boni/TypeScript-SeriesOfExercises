/* import isEmail from 'validator/lib/isEmail';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const passwordRepeat = document.querySelector('.password2') as HTMLInputElement;

const submitFormEvent = (event: Event) => {
  const currentForm = event.currentTarget as HTMLFormElement; //Se quiser usar this, é só mudar o contexto dele com call ou apply
  //EX: function teste(this: Date, arg1) {...} teste.call (new Date(), arg1)

  event.preventDefault();
  hideErrorMessages(currentForm);
  verifyIsEmptyFields(username, email, password, passwordRepeat);
  checkEmail(email);
  checkEqualPasswords(password, passwordRepeat);
  if (shouldSendForm(currentForm)) console.log('formulário enviado!'); //this.submit()
};

const verifyIsEmptyFields = (...inputs: HTMLInputElement[]): void => {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'Campo não pode ficar vazio');
  });
};

const checkEmail = (input: HTMLInputElement): void => {
  if (!isEmail(input.value)) showErrorMessage(input, 'Email inválido');
};

const checkEqualPasswords = (password: HTMLInputElement, passwordRepeat: HTMLInputElement): void => {
  if (password.value !== passwordRepeat.value) {
    showErrorMessage(password, 'Senhas diferentes! Por favor insira senhas iguais!');
    showErrorMessage(passwordRepeat, 'Senhas diferentes! Por favor insira senhas iguais!');
  }
};

const hideErrorMessages = (form: HTMLFormElement): void => {
  form.querySelectorAll('.show-error-message').forEach((item) => item.classList.remove('show-error-message'));
};

const showErrorMessage = (input: HTMLInputElement, message: string): void => {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector('.error-message') as HTMLSpanElement;
  errorMessage.innerText = message;
  formFields.classList.add('show-error-message');
};

const shouldSendForm = (form: HTMLFormElement): boolean => {
  let send = true;

  form.querySelectorAll('.show-error-message').forEach(() => (send = true));

  return send;
};

form.addEventListener('submit', submitFormEvent);
 */

const centimeter = document.querySelector('#centimeter') as HTMLInputElement;
const inches = document.querySelector('#inches') as HTMLInputElement;

centimeter.addEventListener('input', (e) => {
  const target = e.currentTarget as HTMLInputElement;
  const calcCentimeters = calcCentimeterToInches(Number(target.value));
  inches.value = calcCentimeters.toString();
});

inches.addEventListener('input', (e) => {
  const target = e.currentTarget as HTMLInputElement;
  const calcInches = calcInchesToCentimeters(Number(target.value));
  centimeter.value = calcInches.toString();
});

const calcInchesToCentimeters = (value: number): number => {
  return value * 2.54;
};

const calcCentimeterToInches = (value: number): number => {
  return value * 0.393700787;
};
