let val1 = "";
let val2 = "";
let operator = null;
let num1 = true;
let display = "";

const addValue = (num) => {
  if (num1) {
    val1 = val1 + num;
  } else {
    val2 = val2 + num;
  };
  updateDisplay(num);
}

const addOperator = (signe) => {
  if (val1.length > 0) {
    operator = signe;
    num1 = false;
    updateDisplay(` ${operator} `);
  } else {
    alert('Vous devez entrer un nombre')
  }
}

const resetValue = () => {
  val1 = "";
  val2 = "";
  operator = null;
  num1 = true;
}

const calcul = () => {
  if (val2.length > 0) {
    resetDisplay();
    switch (operator) {
      case "+":
        updateDisplay(parseInt(val1) + parseInt(val2))
        break;
      case "-":
        updateDisplay(parseInt(val1) - parseInt(val2))
        break;
      case "*":
        updateDisplay(parseInt(val1) * parseInt(val2))
        break;
      case "/":
        updateDisplay(parseInt(val1) / parseInt(val2))
        break;
      default:
        break;
    }
  } else {
    alert("Vous devez entrer un deuxième nombre");
  }
}

const resetDisplay = () => {
  display = "";
}

const updateDisplay = (newValue) => {
  display = display + newValue;
  document.getElementById('result').innerText = display;
}

const fullReset = () => {
  resetDisplay();
  updateDisplay("");
  resetValue();
}
