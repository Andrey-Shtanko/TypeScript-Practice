var button = document.querySelector("button");
var firstInput = document.getElementById("num1");
var secondInput = document.getElementById("num2");
var add = function (num1, num2) {
    return num1 + num2;
};
button.addEventListener("click", function () {
    console.log(add(+firstInput.value, +secondInput.value));
});
