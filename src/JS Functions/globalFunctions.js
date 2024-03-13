// function to check if the local storage is not contain a list named expenses create it
export const checkLocalStorage = () => {
  if (localStorage.getItem("expenses") === null) {
    localStorage.setItem("expenses", JSON.stringify([]));
  }
};

//function get any nuber of values and check if all contain values ruturn true else return false
export const checkValues = (...values) => {
  return values.every((value) => value.trim() !== "");
};

//function to extract time from date
export const getTime = (date) => {
  return new Date(date).toTimeString().split(" ")[0];
};

//function to extract date from date
export const getDate = (date) => {
  return new Date(date).toISOString().split("T")[0];
};

//function get two numbers and subtract them and return the result
export const subtractNumbers = (a, b) => {
  return a - b;
};


// function get tow arrays of incomes and expenses and combine them which one of the array is containing objects sort them by the date and time
export const combineAndSortByDateTime = (incomes, expenses) => {
  let combined = [...incomes, ...expenses];
  combined.sort((a, b) => {
    return new Date(a.date + " " + a.time) - new Date(b.date + " " + b.time); // Reversed comparison
  });
  return combined;
};

