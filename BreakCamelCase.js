//function that breaks the camel case with a space
// myWords => my Words

function solution(string) {
  return string
    .split("")
    .map((x) => isLower(x))
    .join("");

  function isLower(letter) {
    if (letter.toLowerCase() === letter) {
      return letter;
    }
    return " " + letter;
  }
}

const word = "myWords";

const anwswer = word
  .split("")
  .map((letter) => {
    //OJO!!! I MUST INCLUDE RETURN!
    return letter.toLowerCase() === letter ? letter : " " + letter;
  })
  .join("");

//console.log(solution(word));
console.log(anwswer);
