// Генерируем случайные координаты для каждого цветка
document.getElementById('flower1').style.animation = `fall1 ${getRandomDuration()}s linear infinite`;
document.getElementById('flower2').style.animation = `fall2 ${getRandomDuration()}s linear infinite`;
document.getElementById('flower3').style.animation = `fall3 ${getRandomDuration()}s linear infinite`;

// Функция для получения случайной длительности анимации
function getRandomDuration() {
  return Math.floor(Math.random() * 5) + 3; // случайное число от 3 до 7 секунд
}
