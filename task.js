"use strict"

function solveEquation(a, b, c) {
    let arr;
    let dis = b ** 2 - 4 * a * c
    if (dis < 0) { arr = [] } else if (dis === 0) { arr = [-b / 2 * a] } else { arr = [(-b + Math.sqrt(dis)) / (2 * a), (-b - Math.sqrt(dis)) / (2 * a)] }
    return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    let totalAmount;

    // код для задачи №2 писать здесь

    return totalAmount;
}