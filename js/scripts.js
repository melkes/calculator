// business logic
function add(number1, number2) {
  return number1 + number2;
}
function subtract(number1, number2) {
  return number1 - number2;
}
function divide(number1, number2) {
  return number1 / number2;
}
function multiply(number1, number2) {
  return number1 * number2;
}
// user interface logic 
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));


window.alert("Your numbers are " + number1 + " and " + number2 + ". " + "They add up to " + add(number1, number2) + ".\n\n" + "The first number minus the second number is " + subtract(number1, number2) + ".\n\n" + "The first number divided by the second number is " + divide(number1, number2) + ".\n\n" + "Multiplied together they equal " + multiply(number1, number2) + ".\n");

window.alert(number1 + " + " + number2 + " = " + add(number1, number2) + ".\n\n" + number1 + " - " + number2 + " = " + subtract(number1, number2) + ".\n\n" 
+ number1 + " ÷ " + number2 + " = " + divide(number1, number2) + ".\n\n" 
+ number1 + " x " + number2 + " = " + multiply(number1, number2) + ".\n\n");