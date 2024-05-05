"use strict";
const number1 = document.getElementById("num1");
const number2 = document.getElementById("num2");
const button = document.querySelector("button");
const numres = [];
const stringresult = [];
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + " " + num2;
    }
    else {
        return +num1 + +num2;
    }
}
function printResult(object) {
    console.log(object.val);
}
button.addEventListener("click", () => {
    const num1 = number1.value;
    const num2 = number2.value;
    const result = add(parseInt(num1), parseInt(num2));
    numres.push(result);
    const stringres = add(num1, num2);
    stringresult.push(stringres);
    console.log(numres);
    console.log(stringresult);
    printResult({ val: result, time: new Date() });
});
const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("It worked");
    }, 1000);
});
newPromise.then((Response) => {
    console.log(Response.split("w"));
});
