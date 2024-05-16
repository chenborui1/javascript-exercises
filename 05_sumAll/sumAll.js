const sumAll = function(numOne, numTwo) {
    if (typeof numOne != "number" || typeof numTwo != "number" || numTwo < 0 || numOne < 0) {
        return "ERROR";
    }
    if (numOne > numTwo) {
        save_two = numTwo;
        numTwo = numOne;
        numOne = save_two;
    }
    answer = 0;
    for (let i = numOne; i <= numTwo; i++) {
        answer += i;
    }
    return answer;
};

// Do not edit below this line
module.exports = sumAll;
