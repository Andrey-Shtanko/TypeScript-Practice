const button = document.querySelector("button")! as HTMLButtonElement;
const firstInput = document.getElementById("num1")! as HTMLInputElement;
const secondInput = document.getElementById("num2")! as HTMLInputElement;

const add = (num1: number, num2: number) => {
    return num1 + num2;
};

button.addEventListener("click", () => {
    console.log(add(+firstInput.value, +secondInput.value));
    
});

