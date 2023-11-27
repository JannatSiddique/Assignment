let countries :  Array<string>=['Australia','Brazil','Canada','Germany','India','Japan','Mexico',]
console.log("List of countries:");
countries.forEach((country, index) => {
  console.log(`${index + 1}. ${country}`);
});