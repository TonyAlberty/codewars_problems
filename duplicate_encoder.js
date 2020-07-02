function duplicateEncode(word){
    word = word.toUpperCase();
    var checked = {};
    var keys = [];
    for(char in word){
      keys = Object.keys(checked);
      if(!keys.includes(word[char])){
        checked[word[char]] = 1;
      } else {
        checked[word[char]] ++;
      }
    }
    var translatedString = '';
    for(char in word){
      if(checked[word[char]] > 1){
        translatedString += ')';
      } else {
        translatedString += '(';
      }
    }
    return translatedString;
}
