function add(a, b) {
    return a + b
}

function substract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}
function getPreviousValue() {
    return document.getElementById("text").value
}

function btn_one_click() {
    console.log("button 1 clicked")
    document.getElementById("text").value = getPreviousValue() + 1;
}

function btn_two_click() {
    console.log("button 2 clicked")
    document.getElementById("text").value = getPreviousValue() + 2;


}
function btn_three_click() {
    console.log("button 3 clicked")
    document.getElementById("text").value = getPreviousValue() + 3;


}
function btn_four_click() {
    console.log("button 4 clicked")
    document.getElementById("text").value = getPreviousValue() + 4;

}
function btn_five_click() {
    console.log("button 5 clicked")
    document.getElementById("text").value = getPreviousValue() + 5;

}
function btn_six_click() {
    console.log("button 6 clicked")
    document.getElementById("text").value = getPreviousValue() + 6;

}
function btn_seven_click() {
    console.log("button 7 clicked")
    document.getElementById("text").value = getPreviousValue() + 7;

}
function btn_eight_click() {
    console.log("button 8 clicked")
    document.getElementById("text").value = getPreviousValue() + 8;

}
function btn_nine_click() {
    console.log("button 9 clicked")
    document.getElementById("text").value = getPreviousValue() + 9;

}
function btn_zero_click() {
    console.log("button 0 clicked")
    document.getElementById("text").value = getPreviousValue() + 0;

}
function btn_plus_click() {
    console.log("button + clicked")
    document.getElementById("text").value = getPreviousValue() + `+`;

}
function btn_multiply_click() {
    console.log("button * clicked")
    document.getElementById("text").value = getPreviousValue() + `*`;

} function btn_substract_click() {
    console.log("button - clicked")
    document.getElementById("text").value = getPreviousValue() + `-`;

} function btn_divide_click() {
    console.log("button / clicked")
    document.getElementById("text").value = getPreviousValue() + `/`;

}
function btn_percent_click() {
    console.log("button % clicked")
    document.getElementById("text").value = getPreviousValue() + `%`;

}
function btn_dot_click() {
    console.log("button . clicked")
    document.getElementById("text").value = getPreviousValue() + `.`;

}

function btn_equal_click() {
    let input = getPreviousValue()
    let result = ""
    if (input.indexOf('+') >= 0) {
        let operands = input.split('+')
        result = Number(operands[0]) + Number(operands[1]);
    }
    else if (input.indexOf('*') >= 0) {
        let operands = input.split('*')
        result = Number(operands[0]) * Number(operands[1]);
    }
    else if (input.indexOf('-') >= 0) {
        let operands = input.split('-')
        result = Number(operands[0]) - Number(operands[1]);
    }
    else if (input.indexOf('/') >= 0) {
        let operands = input.split('/')
        result = Number(operands[0]) / Number(operands[1]);
    }
    else if (input.indexOf('%') >= 0) {
        let operands = input.split('%')
        result = (Number(operands[0]) / 100) * Number(operands[1]);
    }

    document.getElementById("output").innerText = result;
}

function btn_clear_click() {
    document.getElementById("text").value = "";
    document.getElementById("output").innerText = 0;
}

