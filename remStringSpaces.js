function noSpace(x) {
  return x.split(" ").join("");
}

const string = "this is the thing";
const result = [...string].filter((x) => (x !== " " ? x : "")).join("");

console.log(result);
console.log(noSpace(string));
