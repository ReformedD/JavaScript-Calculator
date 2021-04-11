/* CSIS 1280 Lab 7

Author: Daymon Ghieuw
Date: 2021-04-03

*/



function addBy() {


    var operand1 = document.getElementById("inp1").value;
    var operand2 = document.getElementById("inp2").value;


    val1 = parseInt(operand1, 10);
    val2 = parseInt(operand2, 10); 

    var result = val1 + val2;
    document.getElementById("textbox").innerHTML = result;
    
}

function multiplyBy() {
    var operand1 = document.getElementById("inp1").value;
    var operand2 = document.getElementById("inp2").value;


    var result = operand1 * operand2;
    document.getElementById("textbox").innerHTML = result;
    
}

function divideBy() {
    var quotient = document.getElementById("inp1").value;
    var quotient2 = document.getElementById("inp2").value;

    var result = quotient / quotient2;
    document.getElementById("textbox").innerHTML = result;

}

function clear1() {
   document.getElementById("ArithmeticCal").reset();
   document.getElementById("textbox").innerHTML = "";
}






    




