ques. Reverse a given string using reverse() method 

input = "BrainMentors"
output = "srotnemniarB"

// solution 

method 1 :-

function reverseString()
{
    var str="BrainMentors";
    var newstr=" ";
    for(var i=str.length-1;i>=0;i--)
        {
            newstr=newstr+str[i];
        }
    return newstr;

console.log(newstr);
}
reverseString();


' srotneMniarB'

method 2:-

var str="BrainMentors";
var newstr=str.split("");
var str2=newstr.reverse();
var rev=str2.join("");
undefined
rev;

'srotneMniarB'

