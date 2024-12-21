const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');
const totalExpenseEl = document.getElementById('total-expense');

let totalExpense = 0;

function addExpense(event) {
  event.preventDefault();

  const description = document.getElementById('description').value.trim();
  const amount = parseFloat(document.getElementById('amount').value);

  if (description === '' || isNaN(amount) || amount <= 0) {
    alert('Please provide valid inputs');
    return;
  }

  // Add expense to the list
  const expenseItem = document.createElement('li');
  expenseItem.innerHTML = `
    ${description}
    <span>৳${amount.toFixed(2)}</span>
  `;
  expenseList.appendChild(expenseItem);

  // Update total expense
  totalExpense += amount;
  totalExpenseEl.textContent = totalExpense.toFixed(2);

  // Clear form fields
  document.getElementById('description').value = '';
  document.getElementById('amount').value = '';
}

// Attach event listener to the form
expenseForm.addEventListener('submit', addExpense);
