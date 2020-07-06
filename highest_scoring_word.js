//giving a string of words separated by spaces, 
//return the highest scoring word were letters' value are
//determined by their position in the alphabet.
function high(x){
    var arr = x.split(" ");
    var max = 0;
    var maxScore = 0;
    console.log(arr);
    for(word in arr){
      var score = scoreWord(arr[word]);
      if(score > maxScore){
        maxScore = score;
        max = word;
      }
    }
    console.log(max);
    return arr[max];
  }
  
  function scoreWord(word){
    var arr = word.split("");
    var sum = 0;
    for(letter in arr){
      sum += arr[letter].charCodeAt() - 96;
    }
    return sum;
  }