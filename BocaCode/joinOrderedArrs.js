function joinOrderedArrays(arr1, arr2) {
  let resultArr = [];
  //size of the longest array
  const longest = arr1.length >= arr2.length ? arr1.length : arr2.length;
  let i = 0;
  let j = 0;
  while (i < longest - 1 && j <= longest - 1) {
    if (arr1[i] <= arr2[j]) {
      resultArr.push(arr1[i]);
      i++;
      //When finish with array 1 just copy the rest of array 2
      // into the result array and break
      if (i === arr1.length) {
        copyArray(j, arr2, resultArr);
        break;
      }
    } else {
      resultArr.push(arr2[j]);
      j++;
      if (j === arr2.length) {
        copyArray(i, arr1, resultArr);
        break;
      }
    }
  }
  return resultArr;
}
//function that copies an array into another
function copyArray(index, arr, newArr) {
  for (let i = index; i <= arr.length - 1; i++) {
    newArr.push(arr[i]);
  }
}

const arr2 = [2, 4, 8, 10, 14, 15, 17];
const arr1 = [1, 3, 5, 7, 9, 18];

const ans = joinOrderedArrays(arr1, arr2);
console.log(ans);
