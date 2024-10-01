//1.Find day of the week using switch case
var day="Friday";
switch(day){
    case "Monday" : 
                    console.log("This is Monday");break
    case "Tuesday" : 
                    console.log("This is Tuesday");break  
    case "Wednesday" : 
                    console.log("This is Wednesday");break
    case "Thursday" : 
                    console.log("This is Thursday");break
    case "Friday" : 
                    console.log("This is Friday");break
    default : 
                    console.log("Weekend");                 
}

//2.Find month of the year using switch case
var monthNumber = 10; 
var monthName;

switch(monthNumber) {
    case 1: monthName = "January"; 
    console.log("This is " +monthName); break;
    case 2: monthName = "February"; 
    console.log("This is " +monthName); break;
    case 3: monthName = "March";
    console.log("This is " +monthName);  break;
    case 4: monthName = "April"; 
    console.log("This is " +monthName); break;
    case 5: monthName = "May"; 
    console.log("This is " +monthName); break;
    case 6: monthName = "June";
    console.log("This is " +monthName);  break;
    case 7: monthName = "July";
    console.log("This is " +monthName);  break;
    case 8: monthName = "August";
    console.log("This is " +monthName);  break;
    case 9: monthName = "September";
    console.log("This is " +monthName);  break;
    case 10: monthName = "October";
    console.log("This is " +monthName);  break;
    case 11: monthName = "November";
    console.log("This is " +monthName);  break;
    case 12: monthName = "December";
    console.log("This is " +monthName);  break;
    default: monthName = "Invalid month";
    console.log("Invalid Month");   
}


//3.Find even numbers in first 10 numbers using while loop
var a = 1;
while (a <= 10) {
    if (a % 2 == 0) {
        console.log(a+ " is even number"); 
    }
    a++;
}


//4.Countdown timer using while loop and the countdown should starts from 10
var count = 10;
while (count >= 0) {
    console.log(count);  
    count--;
}