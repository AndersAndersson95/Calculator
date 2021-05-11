const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const buttonAdd = document.getElementById("plus");
const buttonSub = document.getElementById("sub");
const buttonMulti = document.getElementById("multiplikation");
const buttonDiv = document.getElementById("division");

function add() {
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    
    const result = value1 + value2;

    input3.value = result;
}


function sub() {
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    
    const result = value1 - value2;

    input3.value = result;
}


function multi() {
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    
    const result = value1 * value2;

    input3.value = result;
}


function div() {
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    
    const result = value1 / value2;

    input3.value = result;
}

buttonAdd.addEventListener("click", add);
buttonSub.addEventListener("click", sub);
buttonMulti.addEventListener("click", multi);
buttonDiv.addEventListener("click", div);