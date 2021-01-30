1. //Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function that concats arrays).
function flat(ary) {
    let result = [];
 for(let i = 0; i < ary.length; i++) {
     if(Array.isArray(ary[i])) {
         result = result.concat(flat(ary[i]));
     } else {
         result.push(ary[i]);
     }
 }
 return result;
}

console.log (flat([1, [3, 4, [1, 2]], 10])) 

//2. Given a number. Write a function that calculates its sum of the digits and if that sum has more than 1 digit find the sum of digits of that number. Repeat that process if needed and return the result.

function calcSumOfDigit(num){
    if (num < 10) 
        return num;

    return Math.floor(calcSumOfDigit(num % 10 + calcSumOfDigit(num / 10))); 
} 
console.log (calcSumOfDigit(114)) 
3.//arachine aranc recursia, 2-l im mot miqich teria ashxatum
//Given an array and a number N.  Write a recursive function that rotates an array N places to the left. (Hint: to add element to the beginning use arr.unshift())
function rotate(array, stepsToShift) {

    for (var i = 0; i < stepsToShift; i++) {
        array.unshift(array.pop());
    }

    return array;
}
console.log(rotate([1,2,3,4],2))

let reverseArray = (arr, index=0, num) => {
    if(index === arr.length-1){
    arr.pop();
    return arr;
    }
    else {
      arr[index]=arr[index+num];
      return reverseArray(arr, ++index);
    }
  }
  console.log(reverseArray([1, 2, 3, 4, 5],2));

//4. Given an object. Invert it (keys become values and values become keys). If there is more than key for that given value create an array.
function invertOdj(obj) {
    let invertedMap = {};
    for (let key in obj) {
        let value = obj[key];
        invertedMap[value] = invertedMap[value] || [];
        invertedMap[value].push(key);
    }
    return invertedMap;
}
console.log(invertOdj({a: "1", b: "2", c: "2"}))

//5. Output the books sorted by the percent in descending order which readStatus is true.

let arr=[
    { book: "quCatcherquot", readStatus: true, percent: 40},
    { book: "qAnimalquot", readStatus: true, percent: 20},
    { book: "qAnimalquot", readStatus: false, percent: 30}];
    
    
    function sort (item) {
      return (a, b) => a[item] > b[item] ? 1 : -1;
    }
    function filter(item) {
      return (a) => a[item.readStatus] === true ? 1: -1;
    }
    
    
    arr.sort(sort('percent'));
    arr.forEach(arr => (arr));
    arr.filter(filter('readStatus'));
    arr.forEach(arr => (arr));
       
    console.log(arr)
    