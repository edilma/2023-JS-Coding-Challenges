//Basic Console Log Statement
console.log("Hello Edilma");

// Logs an error to the console
console.error("An error has occured");

// Logs an informational message to the console
console.info("Informational message");

//Logs a table of data to the console
console.table([
  { flower: "Rose", color: "Red" },
  { flower: "Daisy", color: "white" },
]);

//Starts a timer, logs the time taken to complete some work
console.time("Timer 1"); // do some work console.timeEnd("Timer 1");
console.timeEnd("Timer 1");
