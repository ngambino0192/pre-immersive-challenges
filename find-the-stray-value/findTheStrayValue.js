module.exports = function findTheStrayValue(array) {
  // write your code in here

 console.log(array);
  
  var isUnique = [];
  var notUnique = [];
  
  for (i=0; i<array.length; i++){
    if (array[i] === array[i-1] || array[i+1]){
      notUnique.push(array[i]);
    }else{
      isUnique.push(array[i]);
      console.log(isUnique);
      return isUnique.toString();
    }
}
  
}