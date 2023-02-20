function findTarget(arr, target) {
  return arr.map((x) => biggerTarg(x.info, target));
}
function biggerTarg(num, target) {
  return num > target ? "bigger" : num < target ? "smaller" : "equal";
}

const myObjArray = [
  { info: 14, item: "something" },
  { info: 3, item: "whatever" },
  { info: 5, item: "something else" },
];

console.log(findTarget(myObjArray, 5));

const theAnsw = myObjArray.map((x) => biggerTarg(x.info, 5));

//console.log(theAnsw);
