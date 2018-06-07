module.exports = function checkAscOrder(numArray) {
  // write your code in here
  console.log(numArray);

  for (i=0; i<numArray.length-1; i++){
    var result = "";
    if (numArray[i] < numArray[i+1]){
      result = true;
    } else{
      result = false;
    }
    console.log(result);
    str = result;
    return str;
  }
}