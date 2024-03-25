// Подключаем необходимые модули
const express = require('express');

// Создаем экземпляр приложения Express
const app = express();

// Парсим JSON-запросы
app.use(express.json());

// Обработчик для маршрута POST /register
app.post('/register', (req, res) => {
  // Получаем данные из тела запроса
  const { firstName, lastName, email, password, skills, experience, availability, communicationChannels } = req.body;

  // Валидируем данные (можете использовать библиотеку для валидации, например, Joi)
  // Здесь опустим валидацию для простоты примера

  // Создаем профиль пользователя
  const userProfile = {
    firstName,
    lastName,
    email,
    password,
    skills,
    experience,
    availability,
    communicationChannels
  };

  // Возвращаем успешный ответ
  res.status(201).json({ message: 'Профиль успешно создан', userProfile });
});

// Устанавливаем порт, на котором будет работать сервер
const PORT = process.env.PORT || 3000;

// Запускаем сервер и начинаем прослушивать указанный порт
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
