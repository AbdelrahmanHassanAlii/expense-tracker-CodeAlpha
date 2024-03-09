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

//function to delete expence by id
export const deleteExpenseByIndex = (index) => {
  let expenses = JSON.parse(localStorage.getItem("expenses"));
  expenses.splice(index, 1);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  return expenses;
};
