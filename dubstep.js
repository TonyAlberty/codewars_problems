//Replace all instances of WUB with spaces, but you can only have one space between resulting words
function songDecoder(song){
    song = song.replace(/WUB/g, " ");
    var arr = song.split(" ");
    var newString = "";
    for(ele in arr){
      if(arr[ele].length > 0){
        newString += arr[ele] + " ";
      }
    }
    return newString.trim();//whitespace removed from both sides
}