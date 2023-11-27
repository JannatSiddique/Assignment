const colors: string[] = ['Red', 'Blue', 'Green'];

// Intentional error: Trying to access an index that is out of bounds
console.log(colors[3]); 


if (colors.length > 3) {
  console.log(colors[3]);  // This won't execute as it's not executed when the length is less than 4
} else {
  console.log("Index is out of bounds, cannot access element at index 3.");
}
