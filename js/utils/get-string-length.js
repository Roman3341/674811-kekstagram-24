//Функция для проверки максимальной длины строки.
function getStringLength(string, maxLength) {
  return string.length < maxLength;
}

getStringLength('Привет!', 10);

export {getStringLength};
