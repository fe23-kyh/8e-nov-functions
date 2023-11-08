/* En funktion (algoritm) har egenskaperna
  1. Finiteness - En operation som är ändlig (den tar slut)
  2. Definiteness - Entydlig, skriver för människan!
  3. Input - 0, 1 eller flera inputs
  4. Output - 0, 1 eller flera outputs (som beror av input:et)
  5. Effectiveness - Slutförs inom "rimlig" tid
*/ 

// function sayGreeting(name) {
//   console.log("Hey " + name + ", beautiful day, eh?");
// }

//sayGreeting("Yves");

function generateGreeting(name) {
  let greeting;

  switch(Math.floor(Math.random() * 10)) {
    case 0: greeting = "Hey " + name + ", beautiful day, eh?"; break;
    case 1: greeting = "You look amazing today, " + name; break;
    case 2: greeting = "Great day for some coffe, " + name; break;
    default: greeting = "Hey, " + name + ", looking mighty today"; break;
  }
  
  return greeting;
}


// let personName = "Greta";
// let greeting = generateGreeting(personName);

// console.log(greeting);


// ÖVNING: Skapa en funktion som tar emot en "input" av "age" och skriver ut om personen får köra bil eller inte
// Om personen är under 16 får den ej köra
// Om personen är över 115 så får den ej köra

function validateNumber(number) {
  if(number === undefined) {
    console.warn("The value of number was undefined, this function may not work properly");
    return false;
  } else if(typeof number !== 'number') {
    console.error("Number was not numerical");
    return false;
  } else {
    return true;
  }
}

function validateString(text) {
  if(text === undefined) {
    console.warn("The value of text was undefined, this function may not work properly");
    return false;
  } else if(typeof text !== 'string') {
    console.error("Text was not a string");
    return false;
  } else {
    return true;
  }
}

// let personAge = "yves";

function isAllowedToDrive(age) {
  //let valid = validateNumber(age);
  if(!validateNumber(age)) { // guardian clause
    return false;
  }

  if(age <= 16) {
    console.log("This person cannot drive yet");
    return false;
  } else if(age >= 115) {
    console.log("This person should not drive");
    return false;
  } else {
    console.log("This person can drive, wooh");
    return true;
  }

}

// let canDrive = isAllowedToDrive(personAge);

// if(canDrive) {
//   console.log("This person is driving away, brum brum");
// } else {
//   console.log("You need to wait for somebody who can drive you!");
// }

function validateAddress(address) {
  if(!validateString(address)) {
    return false;
  } else if(!address.includes("gatan") && !address.includes("vägen")) {
    console.warn("Adress did not contain gatan or vägen, function may not work properly");
    return false;
  } else {
    return true;
  }
}

let personName = "Greta";
let shoeSize = 40;
let personAge = 15;
let personAddress = "Gretagatan 4015";

function validatePersonDetails(name, age, address, shoeSize) {
  return validateString(name) && validateNumber(age) && validateAddress(address) && validateNumber(shoeSize);
}

function printPersonDetails(name, age, address, shoeSize) {
  if(!validatePersonDetails(name, age, address, shoeSize)) {
    return false;
  }
  // if(!validateString(name)) {
  //   return false;
  // }
  // if(!validateNumber(age)) {
  //   return false;
  // }
  // if(!validateAddress(address)) {
  //   return false;
  // }
  // if(!validateNumber(shoeSize)) {
  //   return false;
  // }

  console.log(`Name: ${name}, age: ${age}, address: ${address}, Shoe size: ${shoeSize}`);
}

printPersonDetails(personName, personAge, personAddress, shoeSize);