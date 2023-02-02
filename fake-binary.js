function fakeBin(x) {
  const arr = [...x];

  function size(x) {
    return x >= 5 ? 1 : 0;
  }
  return arr.map(size).join("");
}

//factoring

function fakeBin2(x) {
  return [...x].map((y) => (y >= 5 ? 1 : 0)).join("");
}

const string = "45385593107843568";

//console.log(size(8));
console.log(fakeBin(string));
console.log(fakeBin2(string));
