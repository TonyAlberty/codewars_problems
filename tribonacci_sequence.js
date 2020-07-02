//Fibonacci, but two instead of three!
function tribonacci(signature,n){
    if(n < 3){
      return signature.slice(0, n);
    }
    else {
      var arr = signature;
      while(arr.length < n){
        var nextNum = arr.slice(arr.length-3, arr.length).reduce(function(a,b){return a+b;});
        arr.push(nextNum);
        console.log(arr.length);
      }
    }
    return arr;
}