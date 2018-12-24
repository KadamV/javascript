
//Example of charAt -->Question 12
var fullString = "I am from Angular Avengers"
function displayText (){    
    var secondLetter = fullString.charAt(18);
    window.alert(secondLetter);
}

//Example of charCodeAt -->Question 13
function displayAsciiText (){
    var codeText = fullString.charCodeAt(18);
    window.alert(codeText);
}
//Example of includes -->Question 15
function checkResult (){
    if (fullString.includes("Angular"))
    window.alert("It is part of given string");
    else {
        window.alert("Not found!");
    }
}
//Example of slice() -->Question 18 
function checkSlice (){
    var codeText = fullString.slice(10,17);
    window.alert(codeText);
}

//Example of checkSubString()-->Question 19 
function checkSubString (){
    var codeText = fullString.substring(10,17);
    window.alert(codeText);
}

//Example of sum()-->Question 23 
function sum() {
    var num1 = 4;
    var num2 = 5;
    var total = num1+num2;
    document.getElementById("total").innerHTML = total;
}

//Example of opertaors-->Question 24 
function claculate() {
    var num1 = 5;
    var num2;
    num2 = num1;
    document.getElementById("displayResult1").innerHTML = num2;
    num2+=num1;
    document.getElementById("displayResult2").innerHTML = num2;
    num2-=num1;
    document.getElementById("displayResult3").innerHTML = num2;
    num2*=num1;
    document.getElementById("displayResult4").innerHTML = num2;
    num2 %= num1;
    document.getElementById("displayResult5").innerHTML = num2;
}

//Example of opertaors-->Question 25 
function checkOperator() {
    var num1 = document.getElementById("firstNumber").value;
    var num2 = document.getElementById("secondNumber").value;
    
    if (num1 == num2) {
        document.getElementById("getResult1").innerHTML = "True";
    } else {
        document.getElementById("getResult1").innerHTML = "False";
    }
    
    if (num1 === num2) {
        document.getElementById("getResult2").innerHTML = "True";
    } else {
        document.getElementById("getResult2").innerHTML = "False";
    }
  
    if (num1 != num2) {
        document.getElementById("getResult3").innerHTML = "True";
    } else {
        document.getElementById("getResult3").innerHTML = "False";
    }

    if (num1 !== num2) {
        document.getElementById("getResult4").innerHTML = "True";
    } else {
        document.getElementById("getResult4").innerHTML = "False";
    }

    if (num1 > num2) {
        document.getElementById("getResult5").innerHTML = "True";
    } else {
        document.getElementById("getResult5").innerHTML = "False";
    }


    if (num1 < num2) {
        document.getElementById("getResult6").innerHTML = "True";
    } else {
        document.getElementById("getResult6").innerHTML = "False";
    }

    if (num1 >= num2) {
        document.getElementById("getResult7").innerHTML = "True";
    } else {
        document.getElementById("getResult7").innerHTML = "False";
    }
    if (num1 <= num2) {
        document.getElementById("getResult8").innerHTML = "True";
    } else {
        document.getElementById("getResult8").innerHTML = "False";
    }

    var terCheck = (num1 == num2)?"equal":"Not Equal"
    document.getElementById("getResult9").innerHTML = terCheck;
}
