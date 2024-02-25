// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits.
//
// Examples:
//
// nextBigger(num: 12)    // returns 21
// nextBigger(num : 513)  //  returns 531
// nextBigger(num : 2017  //  returns 2071
//
// If the digits can't be rearranged to form a bigger number, return -1
//
// 9  =>  -1
// 111 =>  -1
// 531 =>  -1

function extractDigits(num: number): number[] {
  return num.toString().split('').map(Number);
}

function findCriticalIndex(digits: number[]): number {
  let index = -1;
  for (let i = digits.length - 2; i >= 0; i--) {
    if (digits[i] < digits[i + 1]) {
      index = i;
      break;
    }
  }
  return index;
}

function findSwapIndex(digits: number[], criticalIndex: number): number {
  let index = 0;
  for (let i = digits.length - 1; i > criticalIndex; i--) {
    if (digits[i] > digits[criticalIndex]) {
      index = i;
      break;
    }
  }
  return index;
}

function swapDigits(digits: number[], index1: number, index2: number): void {
  [digits[index1], digits[index2]] = [digits[index2], digits[index1]];
}

function joinParts(digits: number[], criticalIndex: number): number {
  const left = digits.slice(0, criticalIndex + 1),
    right = digits.slice(criticalIndex + 1).sort((a, b) => a - b);
  return Number(left.concat(right).join(''));
}

function nextBigger(num: number): number {
  const digits = extractDigits(num);
  const criticalIndex = findCriticalIndex(digits);
  if (criticalIndex === -1) return -1;

  const swapIndex = findSwapIndex(digits, criticalIndex);
  swapDigits(digits, criticalIndex, swapIndex);

  return joinParts(digits, criticalIndex);
}

console.log("-------------- Task 6 --------------")

console.log(nextBigger(12))
console.log(nextBigger(513))
console.log(nextBigger(2017))
console.log(nextBigger(9))
console.log(nextBigger(111))
console.log(nextBigger(531))
