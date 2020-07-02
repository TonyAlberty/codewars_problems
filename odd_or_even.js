//given an array of numbers, return if the sum is even or odd.
function oddOrEven(array) {
    if(!array || array.length == 0){
      return "even";
    } else{
       var sum = array.reduce(function(a,b){return a+b;});
       var mod = sum % 2;
       if(mod == 1 || mod == -1){
         return "odd";
       } else {
         return "even";
      }
    }
}