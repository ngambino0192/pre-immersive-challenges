module.exports = function countByMultiples(length, x) {
  // write your code in here

  var y = x;
  var max = x * length;
  var result = [];
  
  while (x<=max){
    result.push(x);
    x += y;
  }
  console.log(result);
  return result;
} 