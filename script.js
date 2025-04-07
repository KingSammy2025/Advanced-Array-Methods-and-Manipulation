 // let sports = ["hockey", "soccer", "basketball"];

// // add "golf" to the end
// sports.push("golf");
// console.log(sports);

// sports.pop();
// console.log(sports);

// let animals = ["Cat", "Dog", "Lion", "Fish", "Cow"];
// let firstAnimal = animals.shift();
// console.log(firstAnimals);

// animals.unshift("Cat");
// console.log(animals);

// let days = ["Apr 1", "Apr 2", "Apr 3", "Apr 4", "Apr 5", "Apr 6", "Apr 7"];

// let otherDays = days.slice(); // Makes a copy of the array
// let days2 = days.slice(0, 3); // Use elements at index 0, 1, 2
// let removedDays = days.splice(4, 2, "Holiday", "Holiday");
// console.log(days);
// console.log(days2);
// console.log(removedDays);

// let colors = ["Blue", "Red", "Green", "Orange", "Yellow", "Black"];
// let colors2 = colors.slice(3, 6); // Use elements at index 3, 4, 5
// colors.splice(1, 1, "gold");
// console.log(colors);
// console.log(colors2);

// let subjects = ["social", "history", "english", "math", "physics"];
// let mathPosition = subjects.indexOf("math");
// console.log(subjects);
// console.log(mathPosition);

// if (subjects.includes("history")) {
//   console.log("Found history");
// } else {
//   console.log("No history");
// }

// let numbers = [];
// for (let i = 0; i < 10; i++) {
//   let rand = Math.floor(Math.random() * 20 + 1);
//   numbers.push(rand);
// }
// console.log(numbers);
// console.log(` 16 at position : ${numbers.indexOf(16)}`);
// console.log(` 17 at position : ${numbers.indexOf(17)}`);
// console.log(` 18 at position : ${numbers.indexOf(18)}`);
// console.log(` 19 at position : ${numbers.indexOf(19)}`);
// console.log(` 20 at position : ${numbers.indexOf(20)}`);

// if (numbers.includes(10)) {
//   console.log("There is number 10");
// } else {
//   console.log("There is no number 10");
// }

// let cities = ["Honolulu", "Vancouver", "Edmonton", "Saskatoon", "Calgary"];
// cities.sort();
// console.log(cities);
// cities.reverse();
// console.log(cities);

// let number6 = [8, 2, 10, 3, 900, 5];
// number6.sort((a, b) => a - b);
// console.log(number6);
// number6.reverse((a, b) => b - a); // or use number6.reverse()
// console.log(number6);

// let numbers10 = [];
// for (let i = 0; i < 10; i++) {
//   let rand = Math.floor(Math.random() * 50 + 1);
//   numbers10.push(rand);
// }

// let greaterThan25 = numbers10.filter((num) => num >= 25);

// console.log(numbers10);
// console.log(greaterThan25);

// let names = [
//   "Samuel",
//   "Matthew",
//   "Joseph",
//   "Joshua",
//   "Philips",
//   "Esther",
//   "Aaron",
//   "Mia",
//   "Anna",
//   "Serah",
// ];

// let greaterThan5 = names.filter((five) => five.length > 5);
// console.log(names);
// console.log(greaterThan5);

// let fruits = ["pineapple", "apple", "banana", "strawberry"];

// fruits.forEach((fruit, index) => {
//   console.log(`${index + 1}: ${fruit.toUpperCase()}`);
// });

// Use for each to add up all the numbers in an array
// let numbers10 = [];
// for (let i = 0; i < 10; i++) {
//   let rand = Math.floor(Math.random() * 50 + 1);
//   numbers10.push(rand);
// }
// console.log(numbers10);

// let total = 0;
// numbers10.forEach((num) => (total += num));
// console.log(total);

// let animals = ["Lion", "TIger", "Fox", "Deer", "Monkeys"];
// animals.forEach((animal) => console.log(`I Like ${animal}`));

// let numbers = [3, 7, 5, 9, 1];
// let doubleNumbers = numbers.map((oneNumber) => oneNumber * 2);
// console.log(numbers);
// console.log(doubleNumbers);

// let prices = [12.99, 7.99, 50.67, 20, 25, 50];
// let reducedPrices = prices.map((newPrices) => (newPrices * 0.9).toFixed(2));
// console.log(prices);
// console.log(reducedPrices);

// let alphabetString = "abcdefghijklmnopqrstuvwyxz";

// let alphabetArray = alphabetString.split("");
// console.log(alphabetArray);

// let fruitString = "apple,banana,cherry";
// let fruitArray = fruitString.split(",");
// console.log(fruitArray);

// let sentence = "I love coding in javascript very very very much!";
// let sentenceArray = sentence.split(" ");
// console.log(sentenceArray);

// function getEvenArray(allNumbersArray) {
//   let evensArray = allNumbersArray.filter((oneNumber) => oneNumber % 2 === 0);
//   return evensArray;
// }

// let someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArray = getEvenArray(someNumbers);

// console.log(newArray);

// function getCapsArray(allWords) {
//   return allWords.map((aWord) => aWord.toUpperCase());
// }

// let someWords = ["hello", "world"];
// let capsWords = getCapsArray(someWords);
// console.log(capsWords);

// let numbers = [];
// for (let i = 0; i < 15; i++) {
//   let rand = Math.floor(Math.random() * 100 + 1);
//   numbers.push(rand);
// }

// let lessThan50 = numbers.filter((num) => num >= 50);
// lessThan50.sort();
// lessThan50.reverse();
// console.log(numbers);
// console.log(lessThan50);

// let groceries = ["eggs", "bread", "rice", "meat"];
// groceries.push("tea");
// groceries.push("water");
// groceries.unshift("milk");

// letfirstLetter = groceries.shift();
// groceries.pop();
// console.log(groceries);
// console.log(letfirstLetter);

// let alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
// let removedAlphabets = alphabets.splice(3, 3, "Removed", "Removed", "Removed");
// let removedAlphabets2 = alphabets.splice(7, 1);
// console.log(alphabets);
// console.log(removedAlphabets);
// console.log(removedAlphabets2);

// let num20 = [];

// for (let i = 0; i < 20; i++) {
//   let rand = Math.floor(Math.random() * 50 + 1);
//   num20.push(rand);
// }
// console.log(num20);
// let greaterThan30 = num20.filter((num) => num > 30);
// if (num20.includes(42)) {
//   console.log("Found 42!");
// } else {
//   console.log("No 42 in list");
// }

// console.log(greaterThan30);

// let numbers10 = ["-2", "-3", "5", "3", "2", "-1", "8", "-6", "6", "-2"];
// console.log(numbers10);
// numbers10.slice();
// numbers10.sort();
// console.log(numbers10);
// numbers10.slice();
// numbers10.sort();
// numbers10.reverse();
// console.log(numbers10);
// numbers10.splice(5, 0, "10");
// console.log(numbers10);
// numbers10.sort((b, a) => a - b);
// console.log(numbers10);

