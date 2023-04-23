const transactionForm = document.querySelector('#transaction-form');
const transactionNameInput = document.querySelector('#transaction-name');
const transactionAmountInput = document.querySelector('#transaction-amount');
const transactionCategoryInput = document.querySelector('#transaction-category');
const transactionTableBody = document.querySelector('#transaction-table-body');

let transactionList = [];

transactionForm.addEventListener('submit', addTransaction);

function addTransaction(event) {
  event.preventDefault();

  const transactionName = transactionNameInput.value.trim();
  const transactionAmount = parseFloat(transactionAmountInput.value.trim());
  const transactionCategory = transactionCategoryInput.value.trim();

  if (transactionName === '' || isNaN(transactionAmount)) {
    alert('Please enter a valid transaction name and amount.');
    return;
  }

  const transaction = {
    name: transactionName,
    amount: transactionAmount,
    category: transactionCategory,
    date: new Date()
  };

  transactionList.push(transaction);
  transactionNameInput.value = '';
  transactionAmountInput.value = '';
  transactionCategoryInput.value = 'Food';

  displayTransactionList();
}

function displayTransactionList() {
  transactionTableBody.innerHTML = '';

  let total = 0;

  transactionList.forEach((transaction, index) => {
    const row = document.createElement('tr');
    const indexCell = document.createElement('td');
    indexCell.textContent = index + 1;
    const nameCell = document.createElement('td');
    nameCell.textContent = transaction.name;
    const amountCell = document.createElement('td');
    amountCell.textContent = transaction.amount.toFixed(2);
    const categoryCell = document.createElement('td');
    categoryCell.textContent = transaction.category;
    const dateCell = document.createElement('td');
    dateCell.textContent = transaction.date.toLocaleDateString();

    row.appendChild(indexCell);
    row.appendChild(nameCell);
    row.appendChild(amountCell);
    row.appendChild(categoryCell);
    row.appendChild(dateCell);

    transactionTableBody.appendChild(row);

    total += transaction.amount;
  });

  const totalRow = document.createElement('tr');
  const totalCell = document.createElement('td');
  totalCell.colSpan = 2;
  totalCell.textContent = 'Total';
  const amountCell = document.createElement('td');
  amountCell.textContent = total.toFixed(2);
  const categoryCell = document.createElement('td');
  const dateCell = document.createElement('td');

  totalRow.appendChild(totalCell);
  totalRow.appendChild(amountCell);
  totalRow.appendChild(categoryCell);
  totalRow.appendChild(dateCell);

  transactionTableBody.appendChild(totalRow);
}
