/*
Given an integer, take each digit, square it, and combine all squares
back into one integer.

Ex: squareDigits(1234) should return 14916
*/

function squareDigits(num){
    var numAsStr = num.toString();
    var numAsArr = numAsStr.split('');//make sure to include that ''
    //so you split on each seperate number
    var newArr = [];
    for(digit in numAsArr){ //digit is an iterator, i.e. refers to an index
      newArr.push((parseInt(numAsArr[digit])**2).toString());
    }
    return parseInt(newArr.join(''));//"smush" each of the numbers back together
}