//Given the number of floors, build a tower array as in the following example:
//if nFloors == 4, build: 
//    *      
//   ***   
//  *****  
// *******
function towerBuilder(nFloors) {
    var width = 1 + ((nFloors - 1) * 2);
    var middle = (width - 1) / 2;
    var tower = [];
    for(var floor = 0; floor < nFloors; floor++){
      var floorStr = "";
      for(var char = 0; char < width; char++){
        if(char >= (middle - floor) && char <= (middle + floor)){
          floorStr += "*";
        } else {
          floorStr += " ";
        }
      }
      tower.push(floorStr);
    }
    return tower;
}