//check if the local storage is not contain a list named incomes create it
export const checkLocalStorageIncomes = () => {
    if (localStorage.getItem("incomes") === null) {
        localStorage.setItem("incomes", JSON.stringify([]));
    }
}

//function to save one income to local storage
export const saveIncome = (income) => {
    checkLocalStorageIncomes();
    let incomes = JSON.parse(localStorage.getItem("incomes"));
    incomes.push(income);
    localStorage.setItem("incomes", JSON.stringify(incomes));
};