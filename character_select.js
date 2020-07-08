//given an array of characters, a starting position,
//and a list of moves, return the array of hovered characters
//no vertical wrap, yes horizontal wrap
function streetFighterSelection(fighters, position, moves){
    if(moves == ''){
      return [];
    }
    var hovered = [];
    for(move in moves){
      switch(moves[move]){
          case "up":
          if(position[1] == 1){
            position[1] = 0;
          }
          hovered.push(fighters[position[1]][position[0]]);
          break;
          case "down":
          if(position[1] == 0){
            position[1] = 1;
          }
          hovered.push(fighters[position[1]][position[0]]);
          break;
          case "left":
          position[0] = (position[0] - 1) % 6;
          if(position[0] < 0){
            position[0] = 6 + position[0];
          }
          hovered.push(fighters[position[1]][position[0]]);
          break;
          case "right":
          position[0] = (position[0] + 1) % 6;
          hovered.push(fighters[position[1]][position[0]]);
          break;
      }
    }
    return hovered;
}