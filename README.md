<img width="866" height="467" alt="image" src="https://github.com/user-attachments/assets/bac98754-f182-4392-b696-33a28b51b7ae" />
<img width="836" height="548" alt="image" src="https://github.com/user-attachments/assets/dc9f9b60-3180-481a-81aa-e46a790a6e27" />
<img width="1284" height="933" alt="image" src="https://github.com/user-attachments/assets/411a41b8-4b7f-468e-8dd8-ec440f5be13d" />
<img width="1161" height="866" alt="image" src="https://github.com/user-attachments/assets/37ad5575-4f17-4294-9c08-f7e4428352da" />
<img width="1324" height="814" alt="image" src="https://github.com/user-attachments/assets/f8f9e111-c942-4141-a646-77ddd499fd4b" />

# Знайомство з TypeScript — практичне завдання

## Структура проєкту

```
typescript-welcome-task/
├── index.html          # HTML-сторінка (кнопка, select, поля вводу, div для результату)
├── package.json
├── tsconfig.json
├── src/
│   └── index.ts        # TypeScript-код (вихідний файл)
└── dist/
    └── index.js         # Скомпільований JavaScript (підключається в index.html)
```

## Як запустити

1. Встанови залежності:
   ```
   npm install
   ```

2. Скомпілюй TypeScript у JavaScript:
   ```
   npm run build
   ```
   (або `npm run watch` для автоматичної перекомпіляції при змінах)

3. Відкрий `index.html` у браузері (просто двічі клацнути на файл, або через
   розширення "Live Server" у VS Code).

## Що реалізовано

- **Enum** `Color` із трьома кольорами (`Red`, `Green`, `Blue`).
- Змінні різних типів: `userName: string`, `userAge: number`.
- Функція `createGreeting(name, age, hobby, experience)`, яка повертає
  рядок-привітання з урахуванням хобі та досвіду (умовна логіка з трьома
  гілками: > 5 років, 1–5 років, 0 або менше).
- Обробник натискання на кнопку `#greetButton`, який:
  - виводить привітання користувача у `<div id="result">`;
  - перебирає `Enum Color` у циклі `for...in` та виводить усі його значення
    у вигляді списку `<ul><li>`;
  - змінює фон сторінки (`document.body.style.backgroundColor`) на основі
    значення, обраного у `<select id="colorSelect">`.
- Додаткове завдання: два нові поля вводу — `<input type="text" id="hobbyInput">`
  для хобі та `<input type="number" id="experienceInput">` для років досвіду.
  Їхні значення зчитуються при натисканні на кнопку та передаються у функцію
  привітання.

