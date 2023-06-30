1.Write a function calculate that takes three arugments from the user, say num1 , num2, and operation(1==add, 2==subtract, 
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
