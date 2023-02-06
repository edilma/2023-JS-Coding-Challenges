//takes a non-negative number and returns it with its digits in
//descending order.  I put the + to make it a number after the reordering
function descendingOrder(n) {
  return +n
    .toString()
    .split("")
    .map((x) => Number(x))
    .sort()
    .reverse()
    .join("");
}

const number = 123456789;
// const result = number.toString();
// const arr = result.split("").map((x) => Number(x));
// const answer = arr.sort().reverse().join("");

const factoring = number
  .toString()
  .split("")
  .map((x) => Number(x))
  .sort()
  .reverse()
  .join("");

//console.log(answer);
console.log(factoring);
console.log(descendingOrder(number));
console.log(typeof factoring);
