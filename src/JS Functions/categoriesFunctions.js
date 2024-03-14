import { deleteExpensesByCategory } from "./ExpensesFunctions";

// function to check if the local storage is not contain a list named expensesCategories create it
export const checkLocalStorageCategories = () => {
  if (localStorage.getItem("expensesCategories") === null) {
    const emptySet = new Set(); // Create an empty set
    localStorage.setItem(
      "expensesCategories",
      JSON.stringify(Array.from(emptySet))
    ); // Convert set to array and store
  }
};

//function to chech if expensesCategories is empty or not
export const isCategoryEmpty = () => {
  checkLocalStorageCategories();
  const categories = JSON.parse(localStorage.getItem("expensesCategories"));
  return categories.length === 0;
};

//function get one category and save it to expensesCategories in localStorage
export const saveCategory = (category) => {
  checkLocalStorageCategories();
  let categories = new Set(
    JSON.parse(localStorage.getItem("expensesCategories"))
  ); // Deserialize JSON string into a set

  categories.add(category); // Add the new category to the set

  localStorage.setItem(
    "expensesCategories",
    JSON.stringify(Array.from(categories))
  ); // Convert set back to array and store
};

//function to get all categories from the local storage
export const getAllCategories = () => {
  const categories = JSON.parse(localStorage.getItem("expensesCategories"));
  return categories;
};

//function to delete one category from the local storage by name
export const deleteCategoryByName = (category) => {
  let categories = new Set(
    JSON.parse(localStorage.getItem("expensesCategories"))
  );
  categories.delete(category);
  localStorage.setItem(
    "expensesCategories",
    JSON.stringify(Array.from(categories))
  );
  // and delete all expenses with this category
  deleteExpensesByCategory(category);
}
