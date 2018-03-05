"use strict";

let currentNumber = "";
let prevNumber = "";
let resultNumber = "";
let operator = "";

function setNumber(chosenNumber) {
    if (resultNumber) {
        currentNumber = chosenNumber;
        resultNumber = "";
    } else {
        currentNumber += chosenNumber;
    }

    VIEW.html(currentNumber);
}

function moveNumber(chosenOperator) {
    prevNumber = currentNumber;
    currentNumber = "";
    operator = chosenOperator;

    EQUALS.attr("data-result", "");
}


function displayNumber() {
    prevNumber = parseFloat(prevNumber);
    currentNumber = parseFloat(currentNumber);

    switch (operator) {
        case "plus":
            resultNumber = prevNumber + currentNumber;
            break;

        case "minus":
            resultNumber = prevNumber - currentNumber;
            break;

        case "times":
            resultNumber = prevNumber * currentNumber;
            break;

        case "divided":
            resultNumber = prevNumber / currentNumber;
            break;

        default:
            resultNumber = currentNumber;
    }

    if (!isFinite(resultNumber)) {
        if (isNaN(resultNumber)) {
            resultNumber = "NaN";
        } else {
            resultNumber = "0";
            return;
        }
    }

    VIEW.html(resultNumber);
    EQUALS.attr("data-result", resultNumber);

    prevNumber = 0;
    currentNumber = resultNumber;
}

function clear() {
    prevNumber = "";
    currentNumber = "";
    VIEW.html("0");
    EQUALS.attr("data-result", resultNumber);
}
