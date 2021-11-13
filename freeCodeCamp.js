// iterate-odd-numbers-with-a-for-loop
const myArray = [];
for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}

// count-backwards-with-a-for-loop
const myArray = [];
for (let i = 1; i < 6; i++) {
  myArray.push(i);
}

// count-backwards-with-a-for-loop
const myArray = [];
for (let i = 9; i > 0; i -= 2) {
  myArray.push(i);
}

// iterate-through-an-array-with-a-for-loop
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

// nesting-for-loops
function multiplyAll(arr) {
  let product = 1;
  
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    product *= arr[i][j];
  }
}  
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

