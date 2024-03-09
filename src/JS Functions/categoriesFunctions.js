// function to check if the local storage is not contain a list named expensesCategories create it

export const checkLocalStorageCategories = () => {
    if (localStorage.getItem("expensesCategories") === null) {
        localStorage.setItem("expensesCategories", JSON.stringify([]));
    }
}

// function to add new category
export const addCategory = (category) => {
    console.log("addCategory function called with category:", category);
    checkLocalStorageCategories();
    console.log("Local storage categories:", localStorage.getItem("expensesCategories"));
    let categories = JSON.parse(localStorage.getItem("expensesCategories"));
    console.log("Current categories array:", categories);
    categories.push(category);
    console.log("New categories array:", categories);
    localStorage.setItem("expensesCategories", JSON.stringify(categories));
    console.log("New local storage categories:", localStorage.getItem("expensesCategories"));
};


//function to get all categories from the local storage
export const getAllCategories = () => {
    console.log("getAllCategories function called");
    const categories = JSON.parse(localStorage.getItem("expensesCategories"));
    console.log("Local storage categories:", localStorage.getItem("expensesCategories"));
    console.log("Parsed categories:", categories);
    return categories;
};

