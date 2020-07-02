//Return the length of the shortest word in the string
function findShort(s){
    var arr = s.split(" ");
    var min = arr[0].length;
    for(word in arr){
      if(arr[word].length < min){
        min = arr[word].length;
      }
    }
    return min;
}