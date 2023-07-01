1.Write a JavaScript program to display the current day and time in the following format.
Today is : wednesday.
Current time is : 10 PM : 30 : 38

// solution

function dispDate(){
    var today = new Date();
    var day= today.getDay();
    var daylist=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
    console.log("Today is : " + daylist[day] + ".");
var hour=today.getHours();   
var prepand=(hour>=12)?"PM":"AM"; 
hour=(hour>=12)?hour-12:hour;  
 if(hour<9) {
     console.log("Current time : " + "0"+hour + prepand + " : " + today.getMinutes() + ":" + today.getSeconds()); 
 }
    else{
         console.log("Current time : " +hour + prepand + " : " + today.getMinutes() + ":" + today.getSeconds()); 

    }   

}

undefined
dispDate();
