let myDreamCars = ["Charger", "Cayenne", "Cyber Truck", "G Wagon", "Civic"];

function changeOrder(arr) {
  arr.shift("Charger");
  arr.unshift("X3");
  arr.pop();
  arr.push("X3");
  return arr;
}

console.log(changeOrder(myDreamCars));
