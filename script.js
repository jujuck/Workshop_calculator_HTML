let val1 = 0;
let val2 = 0;
let operator = null;
let num1 = true;

const addValue = (num) => {
  if (num1) {
    val1 = val1 + num;
  } else {
    val2 = val2 + num;
  };
}

const addOperator = (signe) => {
  console.log(signe)
  operator = signe;
  num1 = false;
}

const resetValue = () => {
  val1 = 0;
  val2 = 0;
  operator = null;
  num1 = true;
}
const calcul = () => {
  console.log("Calcul");
  switch (operator) {
    case "+":
      console.log(parseInt(val1) + parseInt(val2))
      break;
    case "-":
      console.log(parseInt(val1) - parseInt(val2))
      break;
    case "*":
      console.log(parseInt(val1) * parseInt(val2))
      break;
    case "/":
      console.log(parseInt(val1) / parseInt(val2))
      break;
    default:
      break;

  }
  resetValue();
}
