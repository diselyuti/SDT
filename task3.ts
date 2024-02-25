// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
// Examples:
// digital_root(16)
// => 1 + 6
// => 7
//
// digital_root(942)
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6
//
// digital_root(132189)
// => 1 + 3 + 2 + 1 + 8 + 9
// => 24 ...
// => 2 + 4
// => 6
//
// digital_root(493193)
// => 4 + 9 + 3 + 1 + 9 + 3
// => 29 ...
// => 2 + 9
// => 11 ...
// => 1 + 1
// => 2

function digitalRoot(n: number): number {
  while(n > 9){
    n = n.toString().split('').reduce((acc: number, current: string) => acc + Number(current), 0);
  }
  return n;
}

console.log("-------------- Task 3 --------------")
console.log(digitalRoot(16))
console.log(digitalRoot(942))
console.log(digitalRoot(132189))
console.log(digitalRoot(493193))
