// Task №1
// In this task you will create a function that takes a list of non-negative integers and
// strings and returns a new list with the strings filtered out.
//
//   Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filterList(l: Array<string | number>): number[] {
  return l.filter(item => typeof item === 'number') as number[];
}

console.log("-------------- Task 1 --------------")
console.log(filterList([1,2,'a','b']))
console.log(filterList([1,'a','b',0,15]))
console.log(filterList([1,2,'aasf','1','123',123]))
