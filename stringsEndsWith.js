function solution(str, ending) {
  return str.slice(str.length - ending.length) === ending ? true : false;
}

const strA = "abc";
const strB = "bc";
const ans = strA.slice(strA.length - strB.length);

//console.log(ans);
console.log(solution(strA, strB));
