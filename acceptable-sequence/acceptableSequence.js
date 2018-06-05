module.exports = function acceptableSequence(str) {
 
console.log(str);

// var letters = "b";
// console.log(letters);

    for (i=0; i<str.length; i++){
        var letters = /[a-z]/g;
        var isLetter = letters.test(str[i]);
        var result = "";
        console.log(isLetter);
        if (isLetter === "true" && str.charAt[i-1] === "+" && str.charAt[i+1] === "+"){
            result = true;
        } else{
            result = false;
        }
        console.log(result);
}
str = result;
return str;

}
