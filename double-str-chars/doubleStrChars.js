module.exports = function doubleStrChars(str) {
  // write your code in here
  if (typeof(str) !== 'string'){
    return 'not a string!';
  }
  var strArr = str.split('');
  var myArray = [];
  var double = strArr.forEach(function(element){
    myArray.push(element + element);
  });
  return myArray.join('');
}