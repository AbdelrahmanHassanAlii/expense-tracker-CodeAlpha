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

//function to get all incomes from the local storage
export const getIncomes = () => {
    checkLocalStorageIncomes();
    return JSON.parse(localStorage.getItem("incomes"));
};

//function to delete one income from local storage by index
export const deleteIncomeByIndex = (index) => {
    let incomes = JSON.parse(localStorage.getItem("incomes"));
    incomes.splice(index, 1);
    localStorage.setItem("incomes", JSON.stringify(incomes));
}

// function to get total number of incomes
export const getIncomesCount = () => {
    checkLocalStorageIncomes();
    let incomes = JSON.parse(localStorage.getItem("incomes"));
    return incomes.length;
};

//function to get total amout of all incomes
export const getIncomesAmount = () => {
    checkLocalStorageIncomes();
    let incomes = JSON.parse(localStorage.getItem("incomes"));
    let amount = 0;
    for (let i = 0; i < incomes.length; i++) {
        amount += +incomes[i].amount;
    }
    return amount;
};