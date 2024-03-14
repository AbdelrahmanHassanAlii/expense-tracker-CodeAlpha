import { checkLocalStorage } from "./globalFunctions";

// function to delete all expenses from local storage
export const deleteExpenses = () => {
  localStorage.removeItem("expenses");
};

// function to save one expense to local storage
export const saveExpense = (expense) => {
  let expenses = JSON.parse(localStorage.getItem("expenses"));
  if (expenses === null) {
    expenses = [];
  }
  expenses.push(expense);
  localStorage.setItem("expenses", JSON.stringify(expenses));
};

// function to get all expenses from local storage
export const getExpenses = () => {
  checkLocalStorage();
  return JSON.parse(localStorage.getItem("expenses"));
};

//function to delete expence by index
export const deleteExpenseByIndex = (index) => {
  let expenses = JSON.parse(localStorage.getItem("expenses"));
  expenses.splice(index, 1);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  return expenses;
};

// function to delete one expense from local storage by category name
export const deleteExpensesByCategory = (category) => {
  let expenses = JSON.parse(localStorage.getItem("expenses"));
  let newExpenses = [];
  for (let i = 0; i < expenses.length; i++) {
    if (expenses[i].category !== category) {
      newExpenses.push(expenses[i]);
    }
  }
  localStorage.setItem("expenses", JSON.stringify(newExpenses));
}

// function to get the total number of expenses
export const getExpensesCount = () => {
  checkLocalStorage();
  let expenses = JSON.parse(localStorage.getItem("expenses"));
  return expenses.length;
};

// function to get total amout of all expenses
export const getExpensesAmount = () => {
  checkLocalStorage();
  let expenses = JSON.parse(localStorage.getItem("expenses"));
  let amount = 0;
  for (let i = 0; i < expenses.length; i++) {
    amount += +expenses[i].amount;
  }
  return amount;
};

// function to get total amout of specific category
export const getExpensesAmountByCategory = (category) => {
  checkLocalStorage();
  let expenses = JSON.parse(localStorage.getItem("expenses"));
  let amount = 0;
  for (let i = 0; i < expenses.length; i++) {
    if (expenses[i].category === category) {
      amount += +expenses[i].amount;
    }
  }
  return amount;
}