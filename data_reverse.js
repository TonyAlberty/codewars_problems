//given an array of input (in binary bytes), reverse it
function dataReverse(data) {
    var bytes = data.length / 8;
    var msg = [];
    for(var i = bytes-1; i >= 0; i--){
      for(var j = 0; j < 8; j++){
        msg.push(data[(i*8)+j]);
      }
    }
    return msg;
}