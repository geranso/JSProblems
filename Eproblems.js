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
function processPeople(people) {
  if (people.length === 0) {
    return "No people provided.";
  }

  const processedPeople = [];

  for (let i = 0; i < people.length; i++) {
    const { name, age, email } = people[i];
    const isAdult = age >= 18;

    const processedPerson = {
      name,
      isAdult,
    };

    if (email) {
      processedPerson.email = email;
    }

    processedPeople.push(processedPerson);
  }

  return processedPeople;
}

// Example usage:
const peopleArr = [
  { name: "Alice", age: 25, email: "alice@example.com" },
  { name: "Bob", age: 16, email: "bob@example.com" },
  { name: "Charlie", age: 30 },
];

const processedPeople = processPeople(peopleArr);
console.log("Processed People:", processedPeople);
//50
function formatPeopleInfo(people) {
  if (people.length === 0) {
    return "No people provided.";
  }

  const formattedInfo = [];

  for (let i = 0; i < people.length; i++) {
    const { name, age, email } = people[i];

    let infoString = `${name} is ${age} years old`;

    if (email) {
      infoString += ` and has email ${email}`;
    }

    formattedInfo.push(infoString);
  }

  return formattedInfo;
}

// Example usage:
const peopleArray1 = [
  { name: "Geze", age: 52, email: "geze@example.com" },
  { name: "Ashu", age: 16 },
  { name: "Haymi", age: 30, email: "haymi@example.com" },
];

const formattedInfo = formatPeopleInfo(peopleArray1);
console.log("Formatted Info:", formattedInfo);
//51
function formatPeopleInf(people) {
  if (people.length === 0) {
    return "No people provided.";
  }

  const formattedInf = [];

  for (let i = 0; i < people.length; i++) {
    const { name, age, email } = people[i];

    let infoString1 = `${name} is ${age} years old`;

    if (email) {
      infoString1 += ` and has email ${email}`;
    } else {
      infoString1 += ` and has no email  ${email}`;
    }

    formattedInf.push(infoString1);
  }

  return formattedInf;
}

// Example usage:
const peopleArray2 = [
  { name: "Alice", age: 25, email: "alice@example.com" },
  { name: "Bob", age: 16 },
  { name: "Charlie", age: 30, email: "charlie@example.com" },
  { name: "David", age: 22 },
];

const formattedInf = formatPeopleInf(peopleArray2);
console.log("Formatted Inf:", formattedInf);



