const add = (num1, num2) => {
  return num1 + num2;
}

const subtract = (num1, num2) => {
  return num1 - num2;
}

const multiply = (num1, num2) => {
  return num1 * num2;
}

const divide = (num1, num2) => {
  return num1 / num2;
}


let firstNumber = null;
let operator = '';
let secondNumber = null;

const operate = (num1, operator, num2) => {
  if (num1 && operator === undefined && num2 === undefined) {
    return num1;
  }
  if (operator === ' + ') {
    return add(num1, num2);
  } else if (operator === ' - ') {
    return subtract(num1, num2);
  } else if (operator === ' * ') {
    return multiply(num1, num2);
  } else if (operator === ' / ') {
    return divide(num1, num2);
  }
}

const screen = document.querySelector('.screen');
let display = '';
let saveScreenValue = '';

const displayValues = (val) => {
  if (display.length >= 14) {
    return;
  }
  display += val;
  screen.textContent = display;
  saveScreenValue += val;
}

const reset = () => {
  screen.textContent = '';
  display = '';
  saveScreenValue = '';
  firstNumber = null;
  operator = '';
  secondNumber = null;
}

const evaluate = () => {

  if (firstNumber !== null && operator === '' && secondNumber === null) {
    screen.textContent = firstNumber;
    display = '';
    saveScreenValue = '';
    firstNumber = null;
    operator = '';
    secondNumber = null;
    return;
  }

  if (saveScreenValue === '') {
    screen.textContent = 'ERROR'
    display = '';
    saveScreenValue = '';
    firstNumber = null;
    operator = '';
    secondNumber = null;
    return;
  }


  if (secondNumber === null) {
    secondNumber = Number(saveScreenValue);
    saveScreenValue = '';
  }

  if (firstNumber && operator === ' / ' && secondNumber === 0) {
    screen.textContent = 'Really?'
    display = '';
    saveScreenValue = '';
    firstNumber = null;
    operator = '';
    secondNumber = null;
    return;
  }

  screen.textContent = Number(operate(firstNumber, operator, secondNumber).toFixed(8));
  display = screen.textContent;
  saveScreenValue = screen.textContent;
  firstNumber = null;
  operator = '';
  secondNumber = null;
}

const button1 = document.querySelector('.button-one');
button1.addEventListener('click', () => {
  displayValues('1');
})

const button2 = document.querySelector('.button-two');
button2.addEventListener('click', () => {
  displayValues('2')
})

const button3 = document.querySelector('.button-three');
button3.addEventListener('click', () => {
  displayValues('3')
})

const buttonPlus = document.querySelector('.button-plus');
buttonPlus.addEventListener('click', () => {
  if ((typeof firstNumber === 'number') && (operator !== '')) {
    secondNumber = Number(saveScreenValue);
    evaluate()
  } else if (firstNumber === null && operator !== '') {
    evaluate();
  }

  if (saveScreenValue !== '' && firstNumber === null) {
    firstNumber = Number(saveScreenValue);
    saveScreenValue = '';
  }

  displayValues(' + ');
  operator = ' + ';
  saveScreenValue = '';
})

const button4 = document.querySelector('.button-four');
button4.addEventListener('click', () => {
  displayValues('4')
})

const button5 = document.querySelector('.button-five');
button5.addEventListener('click', () => {
  displayValues('5')
})

const button6 = document.querySelector('.button-six');
button6.addEventListener('click', () => {
  displayValues('6')
})

const buttonMinus = document.querySelector('.button-minus');
buttonMinus.addEventListener('click', () => {
  if ((typeof firstNumber === 'number') && (operator !== '')) {
    secondNumber = Number(saveScreenValue);
    console.log('s')
    evaluate()
  }

  if (saveScreenValue !== '' && firstNumber === null) {
    firstNumber = Number(saveScreenValue);
    saveScreenValue = '';
  }
  displayValues(' - ');
  operator = ' - ';
  saveScreenValue = '';
})

const button7 = document.querySelector('.button-seven');
button7.addEventListener('click', () => {
  displayValues('7')
})

const button8 = document.querySelector('.button-eight');
button8.addEventListener('click', () => {
  displayValues('8')
})

const button9 = document.querySelector('.button-nine');
button9.addEventListener('click', () => {
  displayValues('9')
})

const buttonTimes = document.querySelector('.button-multiply');
buttonTimes.addEventListener('click', () => {
  if ((typeof firstNumber === 'number') && (operator !== '')) {
    secondNumber = Number(saveScreenValue);
    evaluate()
  }

  if (saveScreenValue !== '' && firstNumber === null) {
    firstNumber = Number(saveScreenValue);
    saveScreenValue = '';
  }

  displayValues(' * ');
  operator = ' * ';
  saveScreenValue = '';
})

const buttonClear = document.querySelector('.button-clear');
buttonClear.addEventListener('click', reset)

const button0 = document.querySelector('.button-zero');
button0.addEventListener('click', () => {
  displayValues('0')
})

const buttonEquals = document.querySelector('.button-equals');
buttonEquals.addEventListener('click', () => {
  if (firstNumber === null && saveScreenValue !== '') {
    firstNumber = Number(saveScreenValue);
    screen.textContent = firstNumber;
    display = '';
    saveScreenValue = '';
    firstNumber = firstNumber;
    operator = '';
    secondNumber = null;
    return;
  }

  if (firstNumber && operator === '' && secondNumber === null) {
    console.log(firstNumber)
    screen.textContent = operate(firstNumber);
    display = screen.textContent;
    saveScreenValue = screen.textContent;
    firstNumber = firstNumber;
    operator = '';
    secondNumber = null
    return;
  }

  console.log(firstNumber, operator, secondNumber)
  evaluate()
});

const buttonDivide = document.querySelector('.button-divide');
buttonDivide.addEventListener('click', () => {
  if ((typeof firstNumber === 'number') && (operator !== '')) {
    secondNumber = Number(saveScreenValue);
    console.log('s')
    evaluate()
  }

  if (saveScreenValue !== '' && firstNumber === null) {
    firstNumber = Number(saveScreenValue);
    saveScreenValue = '';
  }
  displayValues(' / ');
  operator = ' / ';
  saveScreenValue = '';
})
