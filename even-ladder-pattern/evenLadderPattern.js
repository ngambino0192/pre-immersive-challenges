module.exports = function evenLadderPattern(num) {
  // write your code in here

  var count = 0;
  if (num <= 1){
    return '';
  }
  var myArray = new Array(num);
    for (i=0; i<=myArray.length; i++){
      myArray[i] = i++;
    }
    // console.log(myArray); // create array of numbers

  var evenArray = [];
    for (i=0; i<myArray.length; i++){
      if (myArray[i] % 2 === 0 && myArray[i] != 0){
        evenArray.push(myArray[i]);
      }
    }
    // console.log(evenArray); // remove non even indexes, and 0

    var evenStrArray = evenArray.toString().split(',');

    // console.log(evenStrArray); // convert to string, and split at commas
  
  for (i=0; i<evenStrArray.length; i++){
    for (j=0; j<evenArray.length; j++){ 
      }
      if (evenStrArray[i] < 10){
        while (evenStrArray[i].length < evenArray[i]){
          evenStrArray[i] = evenStrArray[i] + evenArray[i];
          // console.log(evenStrArray.join('\n')) // create ladder pattern (double digits not accounted for).
          }
      }else{
        while (evenStrArray[i].length < evenArray[i] + evenArray[i]){
          evenStrArray[i] = evenStrArray[i] + evenArray[i];
          // console.log(evenStrArray.join('\n')) // double digits accounted for
          }
      }
    }
    // console.log(evenStrArray.join('\n')) // create ladder pattern
    return evenStrArray.join('\n');

}