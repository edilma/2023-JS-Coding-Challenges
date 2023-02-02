
function BuzzFizz(numberLimit =100){
    for (let i = 0; i < numberLimit; i++) {
        console.log(isBuzz(i));
        
    }   
}

function isBuzz(aNumber=1){
    switch (true) {
        case(aNumber%3===0 && aNumber%5==0):
            return "FizzBuzz";
        case (aNumber%3===0): return "Fizz";
        case(aNumber%5==0): return "Buzz" 
        default: return aNumber;
    }}


    BuzzFizz();