const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Version one
// let evenNum = [];
// const even = myNumbers.forEach((num) => {
//   let number = num % 2 === 0 ? num * 2 : num;
//   evenNum.push(number);
// });

function ForEachEven(arr) {
  arr.forEach((num) => console.log(num % 2 === 0 ? num * 2 : num));
}

ForEachEven(myNumbers);
