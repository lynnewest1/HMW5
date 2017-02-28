function addGoadCheese () {

var origTotal = document.getElementById("Total").innerHTML;


var newTotal = +origTotal + 2;

document.getElementById("Total").innerHTML = newTotal;

}

}
function clearOrder() {
    document.getElementById("Total").innerHTML = 0;

}

function addInputs() {
    var currTotal = document.getElementById("Total").innerHTML;
    if (isNaN(currTotal)) {
        currTotal - 0;

var myInput = document.getElementById("myinput").value;

var newTotal = +myInput + +currTotal;

document.getElementById("Total").innerHTML = newTotal;
    }
}