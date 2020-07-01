/**
 * Make a function that can take any non-negative integer 
 * as a argument and return it with its digits in descending 
 * order. Essentially, rearrange the digits to create the 
 * highest possible number.
 * 
 * Ex:
 * descendingOrder(123456789) should return 987654321
 */

function descendingOrder(n){
    var arr = n.toString();
    arr = arr.split(''); //.split('') splits each char into a new element
    //make sure to include the empty quotes!
    arr.sort(function(a,b){return (b-a)});//the function passed as a parameter in 
    //.sort() is a user defined sorting algorithm.
    var sortedStr = arr.toString();
    sortedStr = sortedStr.replace(/,/g, '');// /,/g is a regex for finding all ,
    return parseInt(sortedStr);
}