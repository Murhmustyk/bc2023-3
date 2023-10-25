const fs = require('fs');

// Зчитуємо JSON файл
fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Помилка при зчитуванні файлу:', err);
        return;
    }

    try {
        // Розбираємо JSON дані
        const currencyRates = JSON.parse(data);

        // Знаходимо максимальний курс валюти
        let maxRate = 0;

        currencyRates.forEach((rateData) => {
            if (rateData.rate > maxRate) {
                maxRate = rateData.rate;
            }
        });

        // Виводимо максимальний курс у вказаному форматі
        const result = `Максимальний курс: ${maxRate}`;
        console.log(result);
        // Зберігаємо результати у файл "output.txt"
        fs.writeFile('output.txt', result, (writeErr) => {
            if (writeErr) {
                console.error('Помилка при збереженні результатів:', writeErr);
            }
        });
    } catch (error) {
        console.error('Помилка при аналізі JSON:', error);
    }
});
