module.exports = function checkAscOrder(numArray) {
  
  for (i=0; i<numArray.length-1; i++){
    var result = "";
    if (numArray[i] < numArray[i+1]){
      result = true;
    } else{
      result = false;
    }
    str = result;
    return str;
  }
}