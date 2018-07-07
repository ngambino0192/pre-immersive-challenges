module.exports = function findTheLongestWord(sen) {
  // write your code in here
  console.log(sen);  
  for (i=0; i<sen.length; i++){
    var longestWord = [];
    // console.log(sen[i].length);
    if (sen[i].length > sen[i+1].length){
      longestWord.push(sen[i]);
      console.log(longestWord);
      result = longestWord
      return result.toString();
    }
  }
}