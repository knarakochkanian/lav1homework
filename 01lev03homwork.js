//1.Write a recursive function to determine whether all digits of the number are odd or not.
function is_odd_recursion(number)
{
  if (number < 0) 
  {
    number = Math.abs(number);
  }
  if (number===0) 
  {
    return false;
  }
  if (number===1) 
  {
    return true;
  }
  else 
  {
    number = number - 2;
    return is_odd_recursion(number);
  }
}
console.log(is_odd_recursion(7791)); 


//2. Given an array of numbers. Write a recursive function to find its minimal positive element. (if such element does not exist, return -1)․
function recSmallest(arr) {
    arr=arr.filter(item=> item>0);

    if (arr.length < 2) {
        return arr[0];
    }
    
    return Math.min(arr.shift(), recSmallest(arr));
}
console.log(recSmallest([45, -9, 15, 5, -78]))



//3. Given an array of numbers which is almost sorted in ascending order.  Find the index where sorting order is violated.
function reternIndex (arr) {
    for (let i=0; i<arr.length; i++) {
      if (arr [i-1] > arr[i]) {
        return arr.indexOf(i)
      }
      } return -1
   
 }
 console.log(reternIndex([-9, -4, -4, 3, 12, 4, 5]))


 4. // es xntiri optimizacian ka memorizaciai michocov , baic menq et chenq ance
 function fib(num) {
    return num <= 1 ? num : fib(num - 1) + fib(num - 2);
  }
  console.log (fib(7))

  //5.5. Given an array. Write a recursive function that removes the first element and returns the given array. (without using arr.unshift(),assign second element to first, third element to second...) 
  let reverseArray = (arr) => {
  
    if(arr.length === 0 || arr.length==1){
      return [];
    }
    else {
      return [arr.pop()].concat(reverseArray(arr));
    }
    
  }
  console.log(reverseArray([1, 2, 3, 4, 5]));