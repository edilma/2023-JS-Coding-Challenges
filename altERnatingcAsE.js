//This is the function for codewars
/*
String.prototype.toAlternatingCase = function () {
  
  const letters = this.split("");
  return letters.map(change).join("");

  function change(letter) {
    return isUppercase(letter) ? letter.toLowerCase() : letter.toUpperCase();
  }
  function isUppercase(letter) {
    return /^[A-Z]/.test(letter);
  }
};*/

//this function checks if this letter is uppercase
function isUppercase(letter) {
  return /^[A-Z]/.test(letter);
}
//this function change the letter from upper to lower or reverse
function change(letter) {
  return isUppercase(letter) ? letter.toLowerCase() : letter.toUpperCase();
}

const word = "HELLO WORLD";
const letters = word.split("");

toAlternatingCase2 = function (word) {
  const letters = word.split("");

  return letters.map(change).join("");

  function change(letter) {
    return isUppercase(letter) ? letter.toLowerCase() : letter.toUpperCase();
  }
};

console.log(toAlternatingCase2(word));
//Best practice in codewars
/*
return this.split("")
  .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
  .join("");
*/
