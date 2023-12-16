//Question No1
console.log("Hello, World!");

//Question No2
function addNumbers(a, b) {
    return a + b;
  }

  //Question No2
  let result = addNumbers(68, 26);
  console.log(result); 

  //Question No3
  function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  
  let result1 = checkEvenOrOdd(4);
  console.log(result1); // Output: Even
  
  let result2 = checkEvenOrOdd(7);
  console.log(result2); // Output: Odd

  //Question No4
  function isPalindrome(str) { 
	var A = str.length-1 
	for(var i=0; i<str.length/2; i++){ 
		if(str[i]!=str[A]){ 
			return false; 
		} 
		A--; 
	} 
	return true; 
} 

var str1 = "racecar"; 
var str2 = "nitin"; 
var str3 = "Rama"; 

console.log(isPalindrome(str1)); 
console.log(isPalindrome(str2)); 
console.log(isPalindrome(str3));

//Question No5
let Warrenton = ['Shoes', 'Cloth', 'water','box'];
console.log(Warrenton.length);

//Question No6
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Example usage:
  const minNumber = 1;
  const maxNumber = 100;
  const randomNumber = getRandomNumber(minNumber, maxNumber);
  
  console.log(`Random number between ${minNumber} and ${maxNumber}: ${randomNumber}`);
//34
const helloName = (name) => `Hello ${name}!`;

// Examples:
console.log(helloName("Gerald"));    // Output: Hello Gerald!
console.log(helloName("Tiffany"));   // Output: Hello Tiffany!
console.log(helloName("Ed"));        // Output: Hello Ed!
//35
function calculateCarsNeeded(people) {
  // Each car can hold 5 people (4 passengers + 1 driver)
  const peoplePerCar = 5;

  // Calculate the number of cars needed
  const carsNeeded = Math.ceil(people / peoplePerCar);

  return carsNeeded;
}

// Example usage:
const numberOfPeople = 20;
const carsRequired = calculateCarsNeeded(numberOfPeople);

console.log(`To accommodate ${numberOfPeople} people, you would need ${carsRequired} cars.`);
//36
function printOddNumbers() {
  for (let i = 1; i < 100; i += 2) {
    console.log(i);
  }
}

// Call the function to print odd numbers
printOddNumbers();
//44
function findYoungestPerson(people) {
  if (people.length === 0) {
    return "No people provided.";
  }

  let youngest = people[0];

  for (let i = 1; i < people.length; i++) {
    if (people[i].age < youngest.age) {
      youngest = people[i];
    }
  }

  return youngest.name;
}

// Example usage:
const peopleArray = [
  { name: "Alex", age: 52, email: "alex@example.com" },
  { name: "Baby", age: 26, email: "baby@example.com" },
  { name: "Charlie", age: 28, email: "charlie@example.com" },
];

const youngestPerson = findYoungestPerson(peopleArray);
console.log("The youngest person is:", youngestPerson);
//46

