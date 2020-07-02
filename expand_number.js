//write the positive integer as a sum of it's 10's values
//ex: 404 => 400 + 4
function expandedForm(num) {
    var str = num.toString();
    var arr = str.split('');
    var rtn = "";
    for(var i = 0; i < arr.length; i++){
      var pow = arr.length - (i + 1);
      if(i == arr.length - 1 && arr[i] != "0"){
        rtn += (parseInt(arr[i]) * (10**pow)).toString();
      } else {
        if(arr[i] != "0"){
          rtn += (parseInt(arr[i]) * (10**pow)).toString() + " + ";
        }
      }
    }
    if(rtn.substr(rtn.length-3, rtn.length) == ' + '){
      rtn = rtn.substr(0, rtn.length-3);
    }
    return rtn;
}