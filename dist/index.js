"use strict";
/* ===================================================================
   Знайомство з TypeScript — практичне завдання
   =================================================================== */
// 1. Enum із трьома кольорами
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
// 2. Змінні різних типів
const userName = 'Аліна';
const userAge = 22;
// 3. Функція привітання (з урахуванням додаткового завдання:
//    ім'я, вік, хобі та досвід у хобі)
function createGreeting(name, age, hobby, experience) {
    let experienceMessage;
    if (experience > 5) {
        experienceMessage = `Вау, ти справжній експерт у ${hobby}!`;
    }
    else if (experience >= 1 && experience <= 5) {
        experienceMessage = `Чудово, ти вже маєш досвід у ${hobby}.`;
    }
    else {
        experienceMessage = 'Все попереду! Починати нове хобі — це цікаво.';
    }
    return `Привіт, ${name}! Тобі ${age} роки. Твоє хобі — ${hobby}. ${experienceMessage}`;
}
// 4. Отримуємо посилання на елементи сторінки
const greetButton = document.querySelector('#greetButton');
const colorSelect = document.querySelector('#colorSelect');
const hobbyInput = document.querySelector('#hobbyInput');
const experienceInput = document.querySelector('#experienceInput');
const resultDiv = document.querySelector('#result');
// 5. Обробка натискання на кнопку
greetButton === null || greetButton === void 0 ? void 0 : greetButton.addEventListener('click', () => {
    if (!resultDiv) {
        return;
    }
    // Зчитуємо хобі та досвід із додаткових полів вводу
    const hobby = (hobbyInput === null || hobbyInput === void 0 ? void 0 : hobbyInput.value.trim()) || 'не вказано';
    const experience = Number(experienceInput === null || experienceInput === void 0 ? void 0 : experienceInput.value) || 0;
    // --- Привітання користувача ---
    const greeting = createGreeting(userName, userAge, hobby, experience);
    // --- Перебір Enum у циклі та формування списку значень ---
    let colorListItemsHtml = '';
    for (const key in Color) {
        const colorValue = Color[key];
        colorListItemsHtml += `<li>${colorValue}</li>`;
    }
    // --- Виводимо результат у div ---
    resultDiv.innerHTML = `
    <p>${greeting}</p>
    <p>Значення Enum <strong>Color</strong>:</p>
    <ul>${colorListItemsHtml}</ul>
  `;
    // --- Зміна кольору фону сторінки на основі обраного значення select ---
    if (colorSelect) {
        document.body.style.backgroundColor = colorSelect.value;
    }
});
