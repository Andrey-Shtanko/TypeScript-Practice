// const button = document.querySelector("button")! as HTMLButtonElement;
// const firstInput = document.getElementById("num1")! as HTMLInputElement;
// const secondInput = document.getElementById("num2")! as HTMLInputElement;

// const add = (num1: number, num2: number) => {
//     return num1 + num2;
// };

// button.addEventListener("click", () => {
//     console.log(add(+firstInput.value, +secondInput.value));
    
// });

// let age: number;
// age = 50;
// let name1: string;
// name1 = 'Max';
// let toggle: boolean;
// toggle = true;
// let empty: null;
// empty = null;
// let notInitialize: undefined;
// notInitialize = undefined;
// let callback = (a: number): number => { return 100 + a };

// let callback = (a: number) => number;
// callback = (a) => { return 100 + a }; question why not correct.


// let anything: any;
// anything = -20;
// anything = 'Text';
// anything = {};

// let some:unknown;
// some = 'Text';

// let str: string;
//  if (typeof some === 'string') {
//     str = some;
// };

// let person: [string, number];

// person = ['Alex', 33];

// enum Status { LOADING, READY };

// const page = {
//     status: Status.READY
// }

// if (page.status === Status.LOADING) {
//     console.log('Page is Loading...');
// }

// if (page.status === Status.READY) {
//     console.log('Page is Ready to use');
// }

// let someVar: string | number;
// someVar = 22;

// let literal: 'enable' | 'disable';

// literal = 'enable';

// function showMessage(message: string): void {
//   console.log(message);
// };


// function calc(num1: number, num2: number): number {
//   return num1 + num2;
// };

// function customError(): never {
//   throw new Error('Error');
// };

// type Page = { 
// title: string,
//   likes: number,
//   accounts: string[],
//   status: 'open' | 'close',
//   details?: {
//     createAt: string,
//     updateAt: string,
//   }
// }

// const page1: Page = {
//   title: 'The awesome page',
//   likes: 100,
//   accounts: ['Max', 'Anton', 'Nikita'],
//   status: 'open',
//   details: {
//     createAt: '2021-01-01',
//     updateAt: '2021-05-01',
//   }
// }

// const page2: Page = {
//   title: 'Python or Js',
//   likes: 5,
//   accounts: ['Alex'],
//   status: 'close',
// }

