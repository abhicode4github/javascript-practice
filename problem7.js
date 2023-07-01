18. Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.
Count of vowels in string;
ex:- str = "brainmentors"
		output: count = 4

// solution 
function countvowels(){
    var str=prompt("enter the string");
    var count=0;
   var str1=['a','e','i','o','u'];
    var str2=str.split("");
    for(var i =0;i<=str.length-1;i++)
        {
            if(str1.includes(str[i]))
            {
                count++;
            }
            console.log(count);
        }
}
countvowels();
  
