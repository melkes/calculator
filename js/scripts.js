function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
 return number1 / number2;
}

function display(number1, number2) {
  let addDisp = number1 + " + " + number2 + " = " + add(number1, number2);
  let subDisp = number1 + " - " + number2 + " = " + subtract(number1, number2);
  let multDisp = number1 + " x " + number2 + " = " + multiply(number1, number2);
  let divDisp = number1 + " ÷ " + number2 + " = " + divide(number1, number2);
  return addDisp + " , " + subDisp + multDisp + divDisp;
}

const promptNum1 = parseInt(prompt("enter a number pleez"));
const promptNum2 = parseInt(prompt("enter another number"));


window.alert("here's your numbers: " + display(promptNum1, promptNum2));

// window.alert("your numbers subtracted: " + subtract(number1, number2));

// window.alert("your numbers multiplied: " + multiply(number1, number2));

// window.alert("your numbers divided: " + divide(number1, number2));
