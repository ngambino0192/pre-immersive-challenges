module.exports = function acceptableSequence(str) {
 
    console.log(str);
        for (i=0; i<str.length; i++){
            var letters = /[a-z]/g;
            var isLetter = letters.test(str[i]);
            var result = "";
            if (isLetter === true && str.charAt(i-1) === "+" && str.charAt(i+1) === "+"){
                result = true;
            } else{
                result = false;
            }
            if (isLetter === result){
                return true;
            } else{
                return false;
            }
    }
}