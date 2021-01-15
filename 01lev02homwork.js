//1.Given three numbers a, b (a ≤ b) and num. Create an array of evenly spaced numbers by the given num length over the specified interval (from a to b).
function creatArr (a, b, num) {
    let step = (b-a)/(num-1);   
    let arr=[];
      for (let i=a; i<=b; i+=step) {
          arr.push(i)
      }
    return arr
}         
    console.log (creatArr(1,5,6))

//2. Given an array of numbers. Find the index of the second maximum element.

arr = [23, -98, 0, -456, 12, 8];
 secondLargestNum = arr.slice(0).sort(function(a,b){return b-a})[1];
 secondLargestIndex=arr.indexOf(secondLargestNum)
 
  console.log(secondLargestIndex)

//3.Given an array of numbers, padding amount and repeat count. Pad the array in the following way: the padding amount specifies how many elements should be taken from the array edges, the repeat amount specifies how many times the pad should be repeated. Also, you should check that padding amount &lt;= length of array.
let arr = [1, 2, 3, 4];
let padAmount = 2;
let repeat = 1;

function padding (arr) {
  let addFirst = arr.slice (0, padAmount);
  let addEnd= arr.slice(-padAmount)
  let arr2=[];
     if (padAmount >= arr.length) return 'Invalid padding amount'
  else {
  arr2=addFirst.concat(arr).concat(addEnd)
  }
  return arr2
}
console.log (padding(arr))

    
//4.Write a function which receives an array and a number as arguments and returns a new array from the elements of the given array which are larger than the given number.
    arr=[10, 25, 16, -5, 30, 15, 24];
    num=16;
    let arr1 = arr.filter(item => item>num);
    console.log(arr1); 

    //5 Write a function, which receives two numbers as arguments and finds all numbers between them such that each digit of the number is even. The numbers obtained should be printed in a comma-separated sequence on a single line.
    function check2Num (num1,num2) {
        let arr =[];
        for (let i=num1;i<=num2;i++) {
            if (allDigitAreEven(i)) {
                arr.push(i)
            }
        }
        if (arr.length>0) {
            return arr.join(',')
        } else {
            return 'Such numbers does not exist'
        }
    }
    function allDigitAreEven (num) {
        let numString = num+ '';
        for (j=0; j<num.length; j++) {
            if (numString[j]%2===1) {
                return false
            }
        }
        return true
    } 