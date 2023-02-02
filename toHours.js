function toHours(number, letter="h"){
    switch (true) {
        case letter.toLowerCase() == "h": return number * 3600;
        case letter.toLocaleLowerCase() == "m": return number * 60;
        default: return 0;      
    }
}


const timeBlock = 1;
const letter = "m"
const answer = toHours(timeBlock, letter)
const timeRequire = (letter=="h"?"hours":"minutes")

if (letter == "h" || letter =="m") {
    console.log( `There are ${answer} seconds in ${timeBlock} ${timeRequire}`)
}
else{
    console.log (`Ops there is ${answer} in that time frame`)
}

