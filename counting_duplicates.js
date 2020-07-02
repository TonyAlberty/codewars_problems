//Solution #1: No regex
function duplicateCount(text){
    text = text.toUpperCase();//case insensitive
    var checked = {};
    var keys = [];
    for(character in text){
      keys = Object.keys(checked);//list of keys from our obj
      if(keys.includes(text[character])){//if present, iterate
        checked[text[character]]++;
      }else{
        checked[text[character]] = 1;//if not, then add to obj
      }
    }
    var count = 0;
    for(key in checked){//check how many characters appear more than once
      if(checked[key] > 1){
        count++;
      }
    }
    return count;
}

//Solution #2: Regex included
function duplicateCount(text){
    text = text.toUpperCase();//case insensitive
    var checked = {};
    var keys = [];
    var char = '';
    for(character in text){
      keys = Object.keys(checked);//list of keys from our obj
      if(!keys.includes(text[character])){
        char = text[character];
        var regEx = new RegExp(char, 'g');
        checked[text[character]] = text.match(regEx).length;
      }
    }
    var count = 0;
    for(key in checked){//check how many characters appear more than once
      if(checked[key] > 1){
        count++;
      }
    }
    return count;
}