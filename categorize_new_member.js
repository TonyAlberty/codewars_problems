//with an array of input containing multiple [age, handicap], determine if each player is a Senior or Open player.
//seniors must be at least 55 with a handicap over 7.
function openOrSenior(data){
  //age, handicap
  var rankings = [];
  for(entry in data){
    if(data[entry][0] >= 55 && data[entry][1] > 7){
      rankings.push("Senior");
    } else {
      rankings.push("Open");
    }
  }
  return rankings;
}
