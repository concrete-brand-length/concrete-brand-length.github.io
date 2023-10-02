let current_entry = ""
let string_sum = ""
let sum = 0
let operator = ""

document.getElementById("clear-current-entry").addEventListener("click", clickClearCurrentEntry);
document.getElementById("clear-sum").addEventListener("click", clickClearSum);
document.getElementById("positive-negative-switch").addEventListener("click", positiveNegativeSwitch);
document.getElementById("percentage").addEventListener("click", percentageSwitch);

document.getElementById("number-nine").addEventListener("click", () => {numberHandler(); current_entry += "9"; document.getElementById("current-number-entry").innerHTML = current_entry;});
document.getElementById("number-eight").addEventListener("click", () => {numberHandler(); current_entry += "8"; document.getElementById("current-number-entry").innerHTML = current_entry;});
document.getElementById("number-seven").addEventListener("click", () => {numberHandler(); current_entry += "7"; document.getElementById("current-number-entry").innerHTML = current_entry;});
document.getElementById("number-six").addEventListener("click", () => {numberHandler(); current_entry += "6"; document.getElementById("current-number-entry").innerHTML = current_entry;});
document.getElementById("number-five").addEventListener("click", () => {numberHandler(); current_entry += "5"; document.getElementById("current-number-entry").innerHTML = current_entry;});
document.getElementById("number-four").addEventListener("click", () => {numberHandler(); current_entry += "4"; document.getElementById("current-number-entry").innerHTML = current_entry;});
document.getElementById("number-three").addEventListener("click", () => {numberHandler(); current_entry += "3"; document.getElementById("current-number-entry").innerHTML = current_entry;});
document.getElementById("number-two").addEventListener("click", () => {numberHandler(); current_entry += "2"; document.getElementById("current-number-entry").innerHTML = current_entry;});
document.getElementById("number-one").addEventListener("click", () => {numberHandler(); current_entry += "1"; document.getElementById("current-number-entry").innerHTML = current_entry;});
document.getElementById("number-zero").addEventListener("click", () => {numberHandler(); current_entry += "0"; document.getElementById("current-number-entry").innerHTML = current_entry;});

document.getElementById("decimal").addEventListener("click", decimalPointButton);

document.getElementById("plus").addEventListener("click", clickPlus);
document.getElementById("minus").addEventListener("click", clickMinus);
document.getElementById("mulitply").addEventListener("click", clickMulitply);
document.getElementById("divide").addEventListener("click", clickDivide);

document.getElementById("equals").addEventListener("click", clickEqual);

// Clear
function clickClearCurrentEntry() {
    current_entry = "";
    document.getElementById("current-number-entry").innerHTML = current_entry;
}

function clickClearSum() {
    string_sum = "";
    document.getElementById("sum").innerHTML = string_sum;
    current_entry = "";
    document.getElementById("current-number-entry").innerHTML = current_entry;
    sum = 0
}

// Postive/negative switch
function positiveNegativeSwitch() {
    if ((current_entry.length == 0 && string_sum.length == 0) || current_entry.includes(" + ") || current_entry.includes(" - ") || current_entry.includes(" * ") || current_entry.includes(" / ")) {
        return;
    } else {
        if (current_entry.startsWith("-")) {
            current_entry = current_entry.substring(1, current_entry.length)
            document.getElementById("current-number-entry").innerHTML = current_entry;
        }
        else {
            current_entry = "-" + current_entry;
            document.getElementById("current-number-entry").innerHTML = current_entry;
        }
    }
}

// Percentage switch
function percentageSwitch() {
    if ((current_entry.length == 0 && string_sum.length == 0) || current_entry.includes(" + ") || current_entry.includes(" - ") || current_entry.includes(" * ") || current_entry.includes(" / ")) {
        return;
    } else {
        current_entry = (parseFloat(current_entry) / 100).toString()
        document.getElementById("current-number-entry").innerHTML = current_entry;
    } 
}

// Number Buttons
function numberHandler() {
if (current_entry.includes(" + ") || current_entry.includes(" - ") || current_entry.includes(" * ") || current_entry.includes(" / ")) {
        string_sum += current_entry;
        current_entry = "";
        document.getElementById("sum").innerHTML = string_sum;
        document.getElementById("current-number-entry").innerHTML = current_entry;
    } else {
        return;
    }
}

// Decimal point
function decimalPointButton() {
    if (current_entry.length == 0 || current_entry.includes(".")) {
        return;
    } else {
        current_entry += "."
        document.getElementById("current-number-entry").innerHTML = current_entry;
    }
}

// Operations
function clickPlus() {
    if ((current_entry.length == 0 && string_sum.length == 0) || current_entry.includes(" + ") || current_entry.includes(" - ") || current_entry.includes(" * ") || current_entry.includes(" / ")) {
        return;
    } else {
        string_sum += current_entry;
        document.getElementById("sum").innerHTML = string_sum;
        current_entry = " + ";
        document.getElementById("current-number-entry").innerHTML = current_entry;
    }
}

function clickMinus() {
    if ((current_entry.length == 0 && string_sum.length == 0) || current_entry.includes(" + ") || current_entry.includes(" - ") || current_entry.includes(" * ") || current_entry.includes(" / ")) {
        return;
    } else {
        string_sum += current_entry;
        document.getElementById("sum").innerHTML = string_sum;
        current_entry = " - ";
        document.getElementById("current-number-entry").innerHTML = current_entry;
    }
}

function clickMulitply() {
    if ((current_entry.length == 0 && string_sum.length == 0) || current_entry.includes(" + ") || current_entry.includes(" - ") || current_entry.includes(" * ") || current_entry.includes(" / ")) {
        return;
    } else {
        string_sum += current_entry;
        document.getElementById("sum").innerHTML = string_sum;
        current_entry = " * ";
        document.getElementById("current-number-entry").innerHTML = current_entry;
    }
}

function clickDivide() {
    if ((current_entry.length == 0 && string_sum.length == 0) || current_entry.includes(" + ") || current_entry.includes(" - ") || current_entry.includes(" * ") || current_entry.includes(" / ")) {
        return;
    } else {
        string_sum += current_entry;
        document.getElementById("sum").innerHTML = string_sum;
        current_entry = " / ";
        document.getElementById("current-number-entry").innerHTML = current_entry;
    }
}

function clickEqual() {
    if (current_entry.length == 0 && string_sum.length == 0) {
        return;
    } else {
        string_sum += current_entry;
        document.getElementById("sum").innerHTML = string_sum;
        current_entry = eval(string_sum);
        document.getElementById("current-number-entry").innerHTML = current_entry;
        string_sum = current_entry
        current_entry = ""
    }
    
}