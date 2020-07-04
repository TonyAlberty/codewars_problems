//Remove the first instance of the lowest integer in the list
function removeSmallest(numbers) {
  var min = numbers[0];
  for(num in numbers){
    if(numbers[num] < min){
      min = numbers[num];
    }
  }
  var index = numbers.indexOf(min);
  var rtn = [];
  for(num in numbers){
    if(num != index){
      rtn.push(numbers[num]);
    }
  }
  return rtn;
}
