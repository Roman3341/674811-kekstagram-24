//Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//Функция, возвращающая случайное целое число из переданного диапазона включительно.
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

getRandomIntInclusive(1, 10);

//Функция для проверки максимальной длины строки.
function getStringLength (string, maxLength) {
  const stringLength = string.length < maxLength ? true : false;
  return stringLength;
}

getStringLength ('Привет!', 10);