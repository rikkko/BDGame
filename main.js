function checkName() {
    const input = document.getElementById('start-page__input').value;
    const errorMessage = document.getElementById('start-page__error-message');
    const validNames = ['томочка', 'тома', 'тамара'];

    if (validNames.includes(input.trim().toLowerCase())) {
        window.location.href = 'html-pages/welcome.html'; 
    } else {
        errorMessage.textContent = 'Не, не. Не то..';
    }
}
// ----------------------------------------------------------------------------
function startGame() {
    window.location.href = 'q1.html'; 
}
// ----------------------------------------------------------------------------
function checkQ1() {
    const userInput = document.getElementById("q1__input").value.trim();
    const errorMessage = document.getElementById("start-page__error-message");

    if (userInput.toLowerCase() === "декабрь") {
        window.location.href = "q2.html";
    } else {
        errorMessage.textContent = 'Не, не. Не то.. Попробуй еще!';
    }
}
// ----------------------------------------------------------------------------
function checkQ2() {
    const userInput = document.getElementById("q2__input").value.trim();
    const errorMessage = document.getElementById("start-page__error-message");
    const validNames = ['блокнот', 'блокнотик'];

    if (validNames.includes(userInput.trim().toLowerCase())) {
        window.location.href = "q3.html";
    } else {
        errorMessage.textContent = 'Не, не. Не то.. Попробуй еще!';
    }
}
// ----------------------------------------------------------------------------
function checkQ3() {
    const userInput = document.getElementById("q3__input").value.trim();
    const errorMessage = document.getElementById("start-page__error-message");

    if (userInput.toLowerCase() === "12") {
        window.location.href = "q4.html";
    } else {
        errorMessage.textContent = 'Не, не. Не то.. Попробуй еще!';
    }
}
// ----------------------------------------------------------------------------
function checkQ4() {
    const userInput = document.getElementById("q4__input").value.trim();
    const errorMessage = document.getElementById("start-page__error-message");

    if (userInput.toLowerCase() === "полотенце") {
        window.location.href = "q5.html";
    } else {
        errorMessage.textContent = 'Не, не. Не то.. Попробуй еще!';
    }
}
// ----------------------------------------------------------------------------
function checkQ5() {
    const userInput = document.getElementById("q5__input").value.trim();
    const errorMessage = document.getElementById("start-page__error-message");
    const validNames = ['0', 'нисколько', 'моисей', 'ноль'];

    if (validNames.includes(userInput.trim().toLowerCase())) {
        window.location.href = "q6.html";
    } else {
        errorMessage.textContent = 'Не, не. Не то.. Попробуй еще!';
    }
}
// ----------------------------------------------------------------------------
function checkQ6() {
    const userInput = document.getElementById("q6__input").value.trim();
    const errorMessage = document.getElementById("start-page__error-message");

    if (userInput.toLowerCase() === "лавровый лист") {
        window.location.href = "q7.html";
    } else {
        errorMessage.textContent = 'Не, не. Не то.. Попробуй еще!';
    }
}
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
