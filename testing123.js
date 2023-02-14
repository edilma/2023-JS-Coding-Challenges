var number = function (array) {
  //your awesome code here
};

const input = ["a", "b", "c"];

function testing(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    let item = `${i + 1}: ${arr[i].toString()}`;
    answer.push(item);
  }
  return answer;
}

console.log(testing(input));
