const budgetForm = document.querySelector('#budget-form');
const budgetSubmitBtn = document.querySelector('#budget-submit-btn');

const foodAmount = document.querySelector('#food-amount');
const utilityAmount = document.querySelector('#utility-amount');
const transportAmount = document.querySelector('#transport-amount');
const entertainmentAmount = document.querySelector('#entertainment-amount');
const othersAmount = document.querySelector('#others-amount');

const foodLimit = document.querySelector('#food-limit');
const utilityLimit = document.querySelector('#utility-limit');
const transportLimit = document.querySelector('#transport-limit');
const entertainmentLimit = document.querySelector('#entertainment-limit');
const othersLimit = document.querySelector('#others-limit');

let totalIncome = 0;
let foodBudgetLimit = 0;
let utilityBudgetLimit = 0;
let transportBudgetLimit = 0;
let entertainmentBudgetLimit = 0;
let othersBudgetLimit = 0;

budgetForm.addEventListener('submit', (event) => {
  event.preventDefault();

  totalIncome = parseInt(document.querySelector('#total-income').value);
  foodBudgetLimit = parseInt(document.querySelector('#food').value);
  utilityBudgetLimit = parseInt(document.querySelector('#utility').value);
  transportBudgetLimit = parseInt(document.querySelector('#transport').value);
  entertainmentBudgetLimit = parseInt(document.querySelector('#entertainment').value);
  othersBudgetLimit = parseInt(document.querySelector('#others').value);

  foodLimit.textContent = foodBudgetLimit;
  utilityLimit.textContent = utilityBudgetLimit;
  transportLimit.textContent = transportBudgetLimit;
  entertainmentLimit.textContent = entertainmentBudgetLimit;
  othersLimit.textContent = othersBudgetLimit;
});

const updateAmount = (category, amount) => {
  switch (category) {
    case 'food':
      foodAmount.textContent = amount;
      break;
    case 'utility':
      utilityAmount.textContent = amount;
      break;
    case 'transport':
      transportAmount.textContent = amount;
      break;
    case 'entertainment':
      entertainmentAmount.textContent = amount;
      break;
    case 'others':
      othersAmount.textContent = amount;
      break;
  }
};

const updateProgressBar = (category, amount) => {
  const progressBar = document.querySelector(`#${category}-progress`);
  const percentSpent = (amount / totalIncome) * 100;
  progressBar.style.width = `${percentSpent}%`;
};

const checkBudgetLimit = (category, amount) => {
  switch (category) {
    case 'food':
      return amount <= foodBudgetLimit;
    case 'utility':
      return amount <= utilityBudgetLimit;
    case 'transport':
      return amount <= transportBudgetLimit;
    case 'entertainment':
      return amount <= entertainmentBudgetLimit;
    case 'others':
      return amount <= othersBudgetLimit;
  }
};

const updateBudget = (category, amount) => {
  if (checkBudgetLimit(category, amount)) {
    updateProgressBar(category, amount);
  } else {
    alert(`You have exceeded your budget for ${category}!`);
  }
};

const transactionForm = document.querySelector('#transaction-form');
const transactionSubmitBtn = document.querySelector('#transaction-submit-btn');

transactionSubmitBtn.addEventListener('click', () => {
  const category = document.querySelector('#transaction-category').value;
  const amount = parseInt(document.querySelector('#transaction-amount').value);

  updateAmount(category, amount);
  updateBudget(category, amount);
});

