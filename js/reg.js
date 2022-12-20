let user_name;
let user_age;
let user_status;

let sendButton = document.querySelector('#send');
sendButton.addEventListener('click', user_properties);

function user_properties() {
    user_name = document.querySelector('#name').value;
    user_age = document.querySelector('#age').value;
    user_status = document.querySelector('#user_type').value;
    user_properties_validator();
}

function user_properties_validator() {
    if (user_name.length < 3 || user_age < 14 || user_age > 30 || user_status == "non_student") {
        if (user_name.length < 3) {
            alert("Вы некорректно ввели имя, должно быть от 3 символов");
        }
        else if (user_age < 14 || user_age > 30) {
            alert("Вы некорректно ввели возраст, возраст должен быть от 14 до 30");
        }
        else if (user_status == "non_student") {
            alert("вход только для студентов AlmaU");
        }
    }
    else {
        window.location.href = "calc.html";
    }
}