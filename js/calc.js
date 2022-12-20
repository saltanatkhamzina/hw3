let operation;
let result;

let sendButton = document.querySelector('#equals');
sendButton.addEventListener('click', nums);



function nums() {
    let num1 = Number(document.querySelector('#num1').value);
    let num2 = Number(document.querySelector('#num2').value);
    if (operation == '+') {
        result = num1 + num2;
    }
    else if (operation == '-') {
        result = num1 - num2;
    }
    else if (operation == '*') {
        result = num1 * num2;
    }
    else if (operation == '/') {
        if (num2 == 0) {
            alert("деление на ноль :/")
        } else {
            result = num1 / num2;
        }
    }
    document.getElementById("result").innerHTML = result;
}