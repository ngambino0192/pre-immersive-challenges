module.exports = function findMiddleValue(numArray) {
  // write your code in here

  var originArr = [];
  // save values of unsorted array into memory with forEach;
  // you must do this so you can refer to the original unsorted array after it is mutated;
  numArray.forEach(function(element){
    originArr.push(element);
    return numArray;
  });
  
  // sort array in ascending order, then locate the middle value;
  var newArray = numArray.sort(function(a,b){ return (a - b);}); 
  var middleValue = newArray[1];

  // return the index of the middle arrays value within the origin array;
  return originArr.indexOf(middleValue);


}
