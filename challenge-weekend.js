//Create a function which returns the number of true values there are in an array.
//

function countTrues(arr){
        function IsTrue(item){
        return item === true;
            }
        return arr.filter(IsTrue).length;
}



//2. Write a function called combineTwoArrays 
//that takes in two arrays as arguments, and 
//returns a single array that combines both.

function combineArrays(arr1,arr2){
    return [[...arr1,...arr2]]
}

//You are given 2 arrays, one called shoppingList and one called cart.



//answers exercise 1
const testArray = [ true, false, false, true, false, false, false, true, true, true, false ]
const answer = countTrues(testArray);

//answer exercise 2
//console.log(`The number of True values is ${answer}`);

const ages = [32, 33, 16, 40];
//console.log(combineArrays(testArray,ages));


function removeItemsCart(arr1,arr2){
    const keepers =[]
 for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
       keepers.push (arr1[i]);
    }    
 }
 return keepers;

}
//answer exercise 3
const shoppingList = ["beer", "milk", "wine", "bananas", "sugar"];
const cart = ["milk", "beer"]



console.log(removeItemsCart(shoppingList, cart))
