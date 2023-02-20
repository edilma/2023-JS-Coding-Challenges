function getBiggest(arr) {
  let max = arr[0];
  i = 0;
  while (i < arr.length) {
    if (arr[i] > max) {
      max = arr[i];
      i++;
    }
    i++;
  }
  return max;
}

const myArray = [4, 5, 2, 3, 7, 14, 25, 1, 3, 0];
//console.log(myArray.length);
console.log(getBiggest(myArray));
