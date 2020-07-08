//given a space separated string, encrypt each
//word by changing the first letter to it's
//charCode, and swapping the second and last
//letters with each other.
function encryptThis(text) {
    var arr = text.split(" ");
    var rtn = "";
    for(var i = 0; i < arr.length; i++){
      if(i==0){
        rtn += encryptSingle(arr[i]);
      } else {
        rtn += " " + encryptSingle(arr[i]);
      }
    }
    return rtn;
  }
  
  function encryptSingle(word){
    if(word.length == 1){
      return word.charCodeAt();
    }
    var arr = word.split("");
    arr[0] = arr[0].charCodeAt().toString();
    var second = arr[1];
    var last = arr[arr.length -1];
    arr[1] = last;
    arr[arr.length -1] = second;
    return arr.join("");
}