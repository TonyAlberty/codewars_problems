//Build a diamond when given an odd number of rows
// e.g. 
/*

  *  
 *** 
*****
 *** 
  *


But as a single string separated by newline chars

*/
function diamond(n){
    if(n%2 == 0 || n<0){
      return null;
    }
    var diam = "";
    var middle = (n-1)/2;
    for(var i = 0; i <= middle; i++){
      var totalChars = n;
      var starCount = (1 + (i * 2));
      var spaceCount = (totalChars - starCount) / 2;
      var currentString = "";
      for(var j = 0; j < spaceCount; j++){
        currentString += " ";
      }
      for(var j = 0; j < starCount; j++){
        currentString += "*";
      }
      currentString += "\n";
      diam += currentString;
    }
    //now on the way back down
    for(var i = middle-1; i >= 0; i--){
      var totalChars = n;
      var starCount = (1 + (i * 2));
      var spaceCount = (totalChars - starCount) / 2;
      var currentString = "";
      for(var j = 0; j < spaceCount; j++){
        currentString += " ";
      }
      for(var j = 0; j < starCount; j++){
        currentString += "*";
      }
      currentString += "\n";
      diam += currentString;
    }
    
    return diam;
}