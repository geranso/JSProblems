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
  