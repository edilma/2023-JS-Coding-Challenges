//categorize new member - codewars

function openOrSenior(data) {
  return data[0] >= 55 && data[1] > 7 ? "Senior" : "Open";
}
function AllList(lists) {
  let resultsT = [];
  lists.forEach((element) => {
    const result = openOrSenior(element);
    resultsT.push(result);
  });
  return resultsT;
}

//Refactoring both functions
function AllList2(list) {
  let resultsT = [];
  lists.forEach((data) => {
    resultsT.push(data[0] >= 55 && data[1] > 7 ? "Senior" : "Open");
  });
  return resultsT;
}

const lists = [
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9],
];
const ageHandicap = [18, 20];
console.log(AllList(lists));
console.log(AllList2(lists));
