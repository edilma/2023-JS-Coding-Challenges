function createPhoneNumber(arr) {
  return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`;
}
//other version
function createPhoneNumber2(numbers) {
  var format = "(xxx) xxx-xxxx";

  for (var i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }

  return format;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(createPhoneNumber(arr));
console.log(createPhoneNumber2(arr));
