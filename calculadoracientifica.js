let result = document.getElementById("result");

function appendCharacter(character) {
  result.value += character;
}

function appendOperator(operator) {
  result.value += operator;
}

function appendMathFunction(mathFunction) {
  result.value += mathFunction + '(';
}

function appendMathConstant(mathConstant) {
  result.value += mathConstant;
}

function appendPower() {
  result.value += '^';
}

function clearResult() {
  result.value = "";
}

function deleteLast() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  try {
    let expression = result.value;
    expression = expression.replace(/x/g, '*');
    expression = expression.replace(/÷/g, '/');
    expression = expression.replace(/sqrt/g, 'Math.sqrt');
    expression = expression.replace(/cbrt/g, 'Math.cbrt');
    expression = expression.replace(/log/g, 'Math.log10');
    expression = expression.replace(/ln/g, 'Math.log');
    expression = expression.replace(/sin/g, 'Math.sin');
    expression = expression.replace(/cos/g, 'Math.cos');
    expression = expression.replace(/tan/g, 'Math.tan');
    expression = expression.replace(/asin/g, 'Math.asin');
    expression = expression.replace(/acos/g, 'Math.acos');
    expression = expression.replace(/atan/g, 'Math.atan');
    expression = expression.replace(/abs/g, 'Math.abs');
    expression = expression.replace(/exp/g, 'Math.exp');
    expression = expression.replace(/floor/g, 'Math.floor');
    expression = expression.replace(/ceil/g, 'Math.ceil');
    expression = expression.replace(/round/g, 'Math.round');
    expression = expression.replace(/pi/g, 'Math.PI');
    expression = expression.replace(/e/g, 'Math.E');
    expression = expression.replace(/\^/g, '**');
    result.value = eval(expression);
  } catch (error) {
    result.value = "Error";
  }
}