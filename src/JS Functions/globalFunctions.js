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

// Combine and sort two arrays by date and time
export function combineAndSortByDateTime(arr1, arr2) {
  const combined = [...arr1, ...arr2];

  combined.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    const timeA = new Date(`1970-01-01T${a.time}`);
    const timeB = new Date(`1970-01-01T${b.time}`);

    // Sort in reverse order by date and time
    return dateB - dateA || timeB - timeA;
  });
  console.log(combined);

  return combined;
}
