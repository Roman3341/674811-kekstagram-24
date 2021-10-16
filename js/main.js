//Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//Функция, возвращающая случайное целое число из переданного диапазона включительно.
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max < min) {
    [min,max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomIntInclusive(10, 1);

//Функция для проверки максимальной длины строки.
function getStringLength (string, maxLength) {
  return string.length < maxLength;
}

getStringLength ('Привет!', 10);