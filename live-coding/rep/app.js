const fruits = ["Apple", "Pear", "Orange"];

// fruits[0] = "Pinapple";
// console.log(fruits);

// //fruits.update(0, "Pineapple"); //denna funktion finns ej


// fruits.push("Melon");
// console.log(fruits);


/* En funktion (algoritm) har egenskaperna
  1. Finiteness - En operation som är ändlig (den tar slut)
  2. Definiteness - Entydlig, skriver för människan!
  3. Input - 0, 1 eller flera inputs
  4. Output - 0, 1 eller flera outputs (som beror av input:et)
  5. Effectiveness - Slutförs inom "rimlig" tid
*/ 

// function printArraysContentToConsole() { // Början på funktionen printArraysContentToConsole

//   for(let i = 0; i < fruits.length; i++) {
//     // console.log((i + 1) + " - " + shoppingList[i]);
//     console.log(`${i + 1} - ${fruits[i]}`);
//   }

// } // Slutet på funktionen printArraysContentToConsole


// printArraysContentToConsole();


function printToConsole(array) { // Början på funktionen printArraysContentToConsole

  if(typeof array == "string") {
    console.log(array);
  } else {
    for(let i = 0; i < array.length; i++) {
      // console.log((i + 1) + " - " + shoppingList[i]);
      console.log(`${i + 1} - ${array[i]}`);
    }
  }

} // Slutet på funktionen printArraysContentToConsole

printToConsole(fruits);

console.log();

const vehicles = ["Cars", "Planes", "Submarines"]

printToConsole(vehicles);

printToConsole("Bertil");


const vehiclesTmpList = vehicles.splice(0, 2);
console.log(vehiclesTmpList);