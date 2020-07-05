//given a string of lowercase letters, determine the sum
//of the integer representation of each letter in the longest
//streak of consonants present
//ex: consonant
//c = 3
//ns = 33
//n = 14
//nt = 34
// therefore we return 34
function solve(s) {
    var vowels = ["a", "e", "i", "o", "u"];
    var arr = s.split("");
    arr = arr.map(function(char){
      return !vowels.includes(char) ? char : "";
    });
    var tempStr = "";
    var streaks = [];
    for(char in arr){
      if(arr[char] == "" && tempStr != ""){
        streaks.push(tempStr);
        tempStr = "";
      } else {
        tempStr += arr[char]
      }
    }
    if(tempStr != ""){
      streaks.push(tempStr);
    }
    streaks = streaks.map(function(ele){
      var sum = 0;
      for(char in ele){
        sum += ele[char].charCodeAt() - 96;
      }
      return sum;
    });
    var max = 0;
    for(streak in streaks){
      if(max < streaks[streak]){
        max = streaks[streak];
      }
    }
    return max;
};