//keep the even numbers in the same spot, fill in
//the gaps with sorted odd numbers!
function sortArray(array) {
    if(array == []){
      return [];
    }
    var rtn = [];
    var odds = [];
    for(num in array){
      if(array[num] % 2 == 0){
        rtn.push(array[num]);
      } else {
        rtn.push(" ");
        odds.push(array[num]);
      }
    }
    odds = odds.sort(function(a,b){return a-b;});
    var oddIterator = 0;
    for(num in rtn){
      if(rtn[num] === " "){
        rtn[num] = odds[oddIterator];
        oddIterator++;
      }
    }
    return rtn;
}