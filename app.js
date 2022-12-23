// const button = document.querySelector("button")! as HTMLButtonElement;
// const firstInput = document.getElementById("num1")! as HTMLInputElement;
// const secondInput = document.getElementById("num2")! as HTMLInputElement;
// const add = (num1: number, num2: number) => {
//     return num1 + num2;
// };
// button.addEventListener("click", () => {
//     console.log(add(+firstInput.value, +secondInput.value));
// });
var age;
age = 50;
var name1;
name1 = 'Max';
var toggle;
toggle = true;
var empty;
empty = null;
var notInitialize;
notInitialize = undefined;
var callback = function (a) { return 100 + a; };
// let callback = (a: number) => number;
// callback = (a) => { return 100 + a }; question why not correct.
var anything;
anything = -20;
anything = 'Text';
anything = {};
var some;
some = 'Text';
var str;
if (typeof some === 'string') {
    str = some;
}
;
var person;
person = ['Alex', 33];
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
;
var page = {
    status: Status.READY
};
if (page.status === Status.LOADING) {
    console.log('Page is Loading...');
}
if (page.status === Status.READY) {
    console.log('Page is Ready to use');
}
var someVar;
someVar = 22;
var literal;
literal = 'enable';
function showMessage(message) {
    console.log(message);
}
;
function calc(num1, num2) {
    return num1 + num2;
}
;
function customError() {
    throw new Error('Error');
}
;
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01'
    }
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close'
};
