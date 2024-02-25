// There is an array of numbers - arr [1, 3, 6, 2, 2, 0, 4, 5]
// there is a number target = 5.
// Count the number of pairs in the array, the sum of which will give target

let numberArray = [1, 3, 6, 2, 2, 0, 4, 5];
let targetNumber = 5;
let countPairs = 0;

for(let i = 0; i < numberArray.length; i++) {
  for(let j = i + 1; j < numberArray.length; j++) {
    if(numberArray[i] + numberArray[j] === targetNumber) {
      countPairs++;
    }
  }
}

console.log("-------------- Task 4 --------------")
console.log(countPairs);
