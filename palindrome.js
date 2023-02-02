function palindrome(word=""){
    let  i=0;
    const length = Math.floor(word.length/2)
    const reverse = [...word].reverse();
    //console.log (reverse);
    do {
        if (word[i]!==reverse[i]) {
            return false;
        }
        i++;
    } while (i<=length);
    return true;
        
    }
    


const word = "racecar";
console.log(palindrome(word));


