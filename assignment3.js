question 1. 

Write a function calculate that takes three arugments from the user, say num1 , num2, and operation(1==add, 2==subtract, 
3==multiply, 4==divide ).Don`t use switch statement or if else statements
 
1.add,
2.subtract,
3.multiply,
4.divide 

// solution

function calc() {
    var add = function(num1,num2) {
        return num1 + num2;
    }
    var sub = function(num1,num2) {
        return num1 - num2;
    }
    var mul = function(num1,num2) {
        return num1 * num2;
    }
    var div = function(num1,num2) {
        return num1 / num2;
    }

    return {add,sub,mul,div};
    
}

function callcalc() {
    var num1 = parseInt(prompt("enter num1"));
    var num2 = parseInt(prompt("enter num2 "));
    var opr = parseInt(prompt("1.add ,2.sub, 3.mul,4.div"));

    var operations = {1:"add",2:"sub",3:"mul",4:"div"};

    console.log(calc()[operations[opr]](num1,num2));
    
}

callcalc();

QUESTION 2. 

Create a function Named Triangle which takes 3 parameters, say A, B and C denoting the 3 sides of a triangle.
Use Callback function, create a method to check if the triangle is Equilateral or not.


Output:
"true" if the triangle is equilateral and "false" if its not.



// solution 

function triangle(x,y,z){
    if((x===y) && (x===z)){
        return true;
    }
    else{
        return false;
    }
}
function callb(fn){
    console.log(fn(3,3,3));
}

callb(triangle);



// OUTPUT 

VM1502:10 true


Question 3.

Given two strings, return true if they are anagrams of one another

For example: Mary is an anagram of Army


// solution

function check(a,b){
    if(a === b){
        console.log("not anagram");
        return;
    }
    if(a.length === b.length){
    var str1 = a.split('').sort().join('');
    var str2 = a.split('').sort().join('');

        if(str1 === str2 ){
            console.log("Anagram");}
        else{
            console.log("Not");
        }
    }else{
        console.log("Not anagram");

    }
}
check("rome","more");


Output

VM2118:11 Anagram

Question 4. 

Create a function Employee, having id, name, basic_Salary as arguments.

Compute HRA, DA, TA, GS, NS.

HRA is 30% of Basic Salary.
DA is 10% of Basic Salary.
TA is 20% of Basic Salary.

GS = Basic Salary + HRA + DA + TA;

TAX DEDUCTION is 10% of GS.

NS = GS - TAX DEDUCTION.

NOte : Use Basic Salary in Lexical Scope 
Print salary slip of the employee.



// solution

function Employee(id, name, basic_Salary){

        function salary() {
        var hra = basic_Salary*0.3;
        var da = basic_Salary*0.1;
        var ta = basic_Salary*0.2;

        
        
        var gs = basic_Salary + hra + da + ta;
        
        
        var td = gs*0.1;

        var ns = gs-td;
        console.log(`Id :- ${id} Name :- ${name}  Net Salary:- ${ns}`);
    }
    return {salary};
}

Employee(1,"shivam", 10000).salary();


Output

VM840:16 Id :- 1 Name :- shivam  Net Salary:- 14400


Question 5.

Write a function to find the maximum and minimum elements in an array

// solution

function findMinMax(Arr) {
	

	let minValue = Math.min(...Arr);
	let maxValue = Math.max(...Arr);
	
	console.log("Minimum element is:" + minValue);
	console.log("Maximum Element is:" + maxValue);
}
var arr = [10,3,23,-1,-9,6];
findMinMax(arr);


Output

VM1324:7 Minimum element is:-9
VM1324:8 Maximum Element is:23


