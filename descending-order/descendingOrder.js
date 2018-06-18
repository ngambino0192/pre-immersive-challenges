module.exports = function descendingOrder(number) {
  // write code in here

  // console.log(number);
  // console.log(typeof number);

  
  // console.log(number);
  if (typeof number === 'string'){
    return 'not a number!'
  }else {
    var numStr = number.toString();
  }
  return numStr.split('').sort().reverse().join('');
}
