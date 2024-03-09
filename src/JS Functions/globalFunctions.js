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
