"use strict";

$(function () {
    NUMBERS.on("click", function () {
        setNumber($(this).children().attr("data-number"));
    });
    
    OPERATORS.on("click", function () {
        moveNumber($(this).children().attr("data-operator")); 
    });
    
    EQUALS_MAIN.on("click", function () {
        displayNumber();
    });
    
    CLEAR.on("click", function () {
        clear();
    });
});
