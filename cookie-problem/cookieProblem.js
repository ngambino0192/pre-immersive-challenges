module.exports = function cookieProblem(array) {
  
  var newCookies = 0;
  for (i=0; i<array.length; i++){
    var total = [];
    while (array[i] < Math.max(...array)){
      array[i] ++;
      newCookies ++;
    }
  }
  str = newCookies;
  return str;







}