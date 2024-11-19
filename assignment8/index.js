
 /**--------------------------------------------problem1---------------------*/

/* var userInput=window.prompt("input:");
console.log("output:",userInput);
var problem1=document.getElementById("one").innerHTML=userInput;
  */

/**----------------------problem2----------------------------------*/

/* var userInput=window.prompt("input:");
if(userInput%3==0||userInput%4==0){
    console.log("output: TRUE");

}else{
    console.log("output:FALSE");
}
 */
/**-----------------------------problem3-----------------------------------------**/
/* var inputOne=window.prompt("enter first number:");
var inputTwo=window.prompt("enter second number:");
if(inputOne>=inputTwo)
{
    console.log("output:",inputOne);
}
else{
    console.log("output:",inputTwo);
} */

/**-----------------------------problem4-----------------------------------------**/
/* var userInput=window.prompt("enter the number:");
if(userInput>=0){
    console.log("positive");
}else{
    console.log("negative");
} */

/**-----------------------------problem5-----------------------------------------**/
/* var inputOne=window.prompt("enter first number:");
var inputSecond = window.prompt("enter second number:");
var inputThird = window.prompt("enter third number:");
if(inputOne>=inputSecond&&inputOne>=inputThird){
    console.log("max=",inputOne);
     if(inputSecond>=inputThird)
     {
        console.log("min=",inputThird);
     }else{
         console.log("min=", inputSecond);
     }
}else if (inputSecond>=inputOne&&inputSecond>=inputThird) {
    console.log("max=", inputSecond);

    if (inputOne >= inputThird) {
        console.log("min=", inputThird);
    } else {
        console.log("min=", inputOne);
    }
    
} else if(inputThird>=inputSecond&&inputThird>=inputOne){
    console.log("max=", inputThird);
    if (inputSecond >= inputOne) {
        console.log("min=", inputOne);
    } else {
        console.log("min=", inputSecond);
    }

} */

/**-----------------------------------------------problem6---------------------------------- */

/*  var userInput = window.prompt("enter the number:");
 if(userInput%2==0){
     console.log("even");
 }else{
     console.log("odd");
 }
*/

/**--------------------------------------problem8------------------------------------ */
/* var userInput=window.prompt("enter a letter:");
if((userInput=='a'||userInput=='A')||(userInput=='e'||userInput=='E')||(userInput=='o'||userInput=='O')||
(userInput=='u'||userInput=='U')||(userInput=='i'||userInput=='I')){
    console.log("vowel");
}else{
    console.log("consonant")
} */
/**----------------------------------------problem9--------------------------- */
/* var userInput=window.prompt("enter a positive number number:");

for(var i=1;i<=userInput;i++){
    console.log(i);
} */
/**------------------------------------------problem10----------------------------- */
/* var userInput=window.prompt("enter the number:");
for(var i=1;i<=12;i++){
    console.log(userInput*i);
} */
/**---------------------------------------problem11--------------------------------------- */
/* var userInput=window.prompt("enter the number:");
for(var i=1;i<=userInput;i++){
    if(i%2==0){
        console.log(i);
    }
} */

/**----------------------------------------problem12----------------------------------- */
/*  var number=window.prompt("enter number:");
 var power=window.prompt("enter power:");
 var result=1;
 for(var i=1;i<=power;i++){
    result*=number;
 }
 console.log(result); */


/**--------------------------------------  problem12-------------------------------------- */
/*  var subjectOne= Number(window.prompt("Enter first subject"));
 var subjectTwo = Number(window.prompt("Enter second subject"));
 var subjectThree =Number(window.prompt("Enter Third subject"));
 var subjectFour = Number(window.prompt("Enter Fourth subject"));
 var subjectFive = Number(window.prompt("Enter Fifth subject"));
 

var total=subjectOne+subjectTwo+subjectThree+subjectFour+subjectFive;
var average=total/5;
//assume total of each subject is from 100
var percentage = (total / 500) * 100;
console.log("total=", total);
console.log("average=", average);
console.log("percentage=", percentage);
 */
/**--------------------------------------------problem13---------------------------------------------- */
/* var userInput=window.prompt("enter month number:");

if(userInput==1||userInput==3||userInput==5||userInput==7||userInput==8||userInput==10||userInput==12){
    console.log("31 days");
}else if(userInput==2){
    console.log("29 days common or 28 in leap years ");
}
else{
    console.log("30 days");
} */
/**---------------------------------------------------------problem14------------------------------------- */
/* var subjectOne = Number(window.prompt("Enter first subject"));
var subjectTwo = Number(window.prompt("Enter second subject"));
var subjectThree = Number(window.prompt("Enter Third subject"));
var subjectFour = Number(window.prompt("Enter Fourth subject"));
var subjectFive = Number(window.prompt("Enter Fifth subject"));
var total=subjectOne+subjectTwo+subjectThree+subjectFour+subjectFive;
var average=total/5;
var percentage=(total/500)*100;

if(percentage>=90){
    console.log("gradeA")
}else if(percentage>=80){
    console.log("gradeB");
} else if (percentage >= 70) {
    console.log("gradec");
} else if (percentage >= 60) {
    console.log("gradeD");
} else if (percentage >= 40) {
    console.log("gradeE");
}else if(percentage<40){
    console.log("gradeF")
} */
/***------------------------------------------------------------------problem15----------------------------- */
/* var month=Number(window.prompt("enter number of month"));
switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31 days");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 days");
        break;
    case 2:
        console.log("28 or 29 depending on leap year");
        break;
    default:
        console.log("invalid month enter a valid number between 1 and 12");
    

} */
/**------------------------------------------------------------problem16 -------------------------------------------*/



/* var letter=window.prompt("enter a letter");
switch(letter){


    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        console.log(letter+" is a vowel");
        break;
    default:
        if((letter >= 'a' && letter<='z') || (letter >= 'A' && letter <= 'Z')) {
        console.log(letter +" is consonant")
     
        }
        else{
            console.log("invalid character");
        }
} */

/**------------------------------------------probelem17------------------------------------------ */
/*  var num1=Number(window.prompt("enter first number"));
 var num2 = Number(window.prompt("enter second number"));

 switch(true){
     case num1>num2:
         console.log(num1);
         break;
     case num2>num1:
         console.log(num2);
         break;
     case num1==num2:
         console.log("equal numbers =",num1);
         break;
     default:
         console.log("enter valid numbers");

 }
*/

/**------------------------------------------probelem18------------------------------------------ */
/*   var num = Number(window.prompt("enter a number"));
  switch(true){
      case num%2==0&&num!=0:
          console.log("Even");
          break;
      case num%2==1:
          console.log("Odd");
          break;
      case num==0:
          console.log("neither even nor odd");
          break;
      default:
          console.log("Enter a valid number");
      
  } */

/**-----------------------------------------problem19---------------------------------- */


/*  var num = Number(window.prompt("enter a number"));
 switch(true){
    case num>0:
        console.log("positive");
        break;
    case num < 0:
         console.log("negative");
         break;
    case num==0:
         console.log("zero");
         break;
    default:
         console.log("Enter a valid number");
    

 } */


/**-----------------------------------------problem20---------------------------------- */
/*  var num1 = Number(window.prompt("enter first number "));
 var num2 = Number(window.prompt("enter second number"));
 var operation=window.prompt("enter operation + - * /");
 switch(operation){
  case '+':
      console.log(num1, operation ,num2 , ' = ',num1+num2);
      break;
  case '-':
       console.log(num1, operation, num2, " = ", num1 - num2);
      break;
  case '*':
      console.log(num1, operation, num2, " = ", num1 * num2);
      break;
  case '/':
      console.log(num1, operation, num2, " = ", num1 / num2);
      break;
  default:
      console.log("enter either valid numbers or operation");
 }
*/








