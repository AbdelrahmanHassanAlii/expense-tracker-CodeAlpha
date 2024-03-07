// function to check if the local storage is not contain a list named expenses create it
export const checkLocalStorage = () => {
    if (localStorage.getItem("expenses") === null) {
        localStorage.setItem("expenses", JSON.stringify([]));
    }
}

// function to delete expenses from local storage
export const deleteExpenses = () => {
    localStorage.removeItem("expenses");
}

// function to save one expense to local storage
export const saveExpense = (expense) => {
    let expenses = JSON.parse(localStorage.getItem("expenses"));
    if (expenses === null) {
      expenses = [];
    }
    expenses.push(expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

//function get any nuber of values and check if all contain values ruturn true else return false
export const checkValues = (...values) => {
    return values.every((value) => value.trim() !== "");
}

// function to get all expenses from local storage
export const getExpenses = () => {
    checkLocalStorage();
    return JSON.parse(localStorage.getItem("expenses"));
}


