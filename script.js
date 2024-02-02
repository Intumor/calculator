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
let hasDot = false;

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

document.addEventListener('keydown', (event) => {
  console.log(event.key);
  switch (event.key) {
    case '1':
      displayValues('1');
      break;
    case '2':
      displayValues('2');
      break;
    case '3':
      displayValues('3');
      break;
    case '+':
      addPlus();
      break;
    case '4':
      displayValues('4');
      break;
    case '5':
      displayValues('5');
      break;
    case '6':
      displayValues('6');
      break;
    case '-':
      addMinus();
      break;
    case '7':
      displayValues('7');
      break;
    case '8':
      displayValues('8');
      break;
    case '9':
      displayValues('9');
      break;
    case '*':
      addTimes();
      break;
    case '0':
      displayValues('0');
      break;
    case 'Delete':
      reset();
      break;
    case 'Enter':
      doMath();
      break;
    case '/':
      addDivision();
      break;
    case '.':
      addDot();
      break;
    case 'Backspace':
      deleteValue();
      break;
  }
})

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
  addPlus();
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
  addMinus();
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
  addTimes();
})

const buttonClear = document.querySelector('.button-clear');
buttonClear.addEventListener('click', reset)

const button0 = document.querySelector('.button-zero');
button0.addEventListener('click', () => {
  displayValues('0')
})

const buttonEquals = document.querySelector('.button-equals');
buttonEquals.addEventListener('click', () => {
  doMath();
});

const buttonDivide = document.querySelector('.button-divide');
buttonDivide.addEventListener('click', () => {
  addDivision();
})

const buttonDot = document.querySelector('.button-dot');
buttonDot.addEventListener('click', () => {
  addDot();
})

const delButton = document.querySelector('.button-del');
delButton.addEventListener('click', () => {
  deleteValue();
})

const addPlus = () => {
  if (firstNumber === null && operator === '' && secondNumber === null && screen.textContent !== '') {
    firstNumber = Number(screen.textContent);
    display = screen.textContent;
    saveScreenValue = screen.textContent;
  }

  if ((typeof firstNumber === 'number') && operator === '' && secondNumber === null && saveScreenValue !== '' && firstNumber != saveScreenValue) {
    firstNumber = Number(saveScreenValue);
  }

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
}

const addMinus = () => {
  if (firstNumber === null && operator === '' && secondNumber === null && screen.textContent !== '') {
    firstNumber = Number(screen.textContent);
    display = screen.textContent;
    saveScreenValue = screen.textContent;
  }

  if ((typeof firstNumber === 'number') && operator === '' && secondNumber === null && saveScreenValue !== '' && firstNumber != saveScreenValue) {
    firstNumber = Number(saveScreenValue);
  }

  if ((typeof firstNumber === 'number') && (operator !== '')) {
    secondNumber = Number(saveScreenValue);
    evaluate()
  }

  if (saveScreenValue !== '' && firstNumber === null) {
    firstNumber = Number(saveScreenValue);
    saveScreenValue = '';
  }
  displayValues(' - ');
  operator = ' - ';
  saveScreenValue = '';
}

const addTimes = () => {
  if (firstNumber === null && operator === '' && secondNumber === null && screen.textContent !== '') {
    firstNumber = Number(screen.textContent);
    display = screen.textContent;
    saveScreenValue = screen.textContent;
  }

  if ((typeof firstNumber === 'number') && operator === '' && secondNumber === null && saveScreenValue !== '' && firstNumber != saveScreenValue) {
    firstNumber = Number(saveScreenValue);
  }

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
}

const addDivision = () => {
  if (firstNumber === null && operator === '' && secondNumber === null && screen.textContent !== '') {
    firstNumber = Number(screen.textContent);
    display = screen.textContent;
    saveScreenValue = screen.textContent;
  }

  if ((typeof firstNumber === 'number') && operator === '' && secondNumber === null && saveScreenValue !== '' && firstNumber != saveScreenValue) {
    firstNumber = Number(saveScreenValue);
  }

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
}

const doMath = () => {
  if ((typeof firstNumber === 'number') && operator !== '' && (typeof secondNumber === 'number') && saveScreenValue !== '') {
    const secondNum = [];
    for (let i = saveScreenValue.length - 1; i >= 0; i--) {
      secondNum.unshift(saveScreenValue[i])
      if (saveScreenValue[i] === ' ') {
        secondNumber = Number(secondNum.join('').trim());
        break;
      }
    }
  }

  if (saveScreenValue[0] === '.') {
    firstNumber = Number(0 + '.' + saveScreenValue.slice(1));
  }

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
    screen.textContent = operate(firstNumber);
    display = screen.textContent;
    saveScreenValue = screen.textContent;
    firstNumber = firstNumber;
    operator = '';
    secondNumber = null;
    return;
  }

  evaluate();
  display = '';
  saveScreenValue = '';
}

const addDot = () => {
  for (let i = 0; i < saveScreenValue.length; i++) {
    if (saveScreenValue[i] === '.') {
      displayValues('');
      return;
    }
  }

  displayValues('.')
}

const deleteValue = () => {
  if ((firstNumber === null && operator === '' && secondNumber === null) || (firstNumber !== null && operator === '' && secondNumber === null)) {
    screen.textContent = screen.textContent.slice(0, -1);
    display = screen.textContent;
    saveScreenValue = screen.textContent;
    firstNumber = Number(screen.textContent);
  } else if (firstNumber !== null && operator !== '' && secondNumber === null && saveScreenValue === '') {
    console.log(firstNumber, operator, secondNumber, saveScreenValue)
    screen.textContent = screen.textContent.slice(0, -3);
    display = screen.textContent;
    saveScreenValue = screen.textContent;
    operator = '';
  } else if ((firstNumber !== null && operator !== '' && secondNumber === null && saveScreenValue !== '')) {
    secondNumber = saveScreenValue;
    screen.textContent = screen.textContent.slice(0, -1);
    display = screen.textContent;
    saveScreenValue = screen.textContent;
    secondNumber = secondNumber.slice(0, -1)
    secondNumber = Number(secondNumber)
  } else if (firstNumber !== null && operator !== '' && secondNumber !== null) {
    screen.textContent = screen.textContent.slice(0, -1);
    display = screen.textContent;
    saveScreenValue = screen.textContent;
    secondNumber = secondNumber + '';
    secondNumber = secondNumber.slice(0, -1)
    secondNumber = Number(secondNumber)
    if (secondNumber === 0) {
      secondNumber = null;
      saveScreenValue = '';
    }
  }
}
