//Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//Функция, возвращающая случайное целое число из переданного диапазона включительно.
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max < min) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt(10, 1);

//Функция для проверки максимальной длины строки.
function getStringLength(string, maxLength) {
  return string.length < maxLength;
}

getStringLength('Привет!', 10);


const DESCRIPTION_WORDS = [
  'принтер',
  'телевизор',
  'музей',
  'микрофон',
  'карась',
  'Женева',
  'коктейль',
  'воск',
  'хвоя',
  'светильник',
  'алмаз',
  'коран',
  'овсянка',
  'магистраль',
  'слово',
  'шкала',
  'кляча',
  'скалка',
  'фитиль',
  'крестик',
  'манускрипт',
  'африка',
  'дыня',
  'богородица',
  'шланг'
];

const COMMENT_NAMES = [
  'Антон',
  'Павел',
  'Юлия',
  'Анастасия',
  'Иван',
  'Игорь',
  'Вячеслав',
  'Ирина',
  'Анастасия',
  'Светлана'
];

const COMMENT_MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

//пустой массив для комментариев
const commentsMany = [];

//цикл создания 25ти фото
for (i = 1; i <= 25; i++) {
  //цикл генерирования массива с комментариями
  for (let j = getRandomInt(0, 10); j <= 10; j++) {
    const comment = {
      id: getRandomInt(1, 1000),
      avatar: 'img/avatar-' + getRandomInt(0, 6) + '.jpg',
      message: COMMENT_MESSAGE[Math.floor(Math.random() * COMMENT_MESSAGE.length)],
      name: COMMENT_NAMES[Math.floor(Math.random() * COMMENT_NAMES.length)]
    }
    commentsMany.push(comment);
  };
  //функция создания одного фото
  const createPhoto = () => {
    //вызов создания фото
    return {
      id: i,
      url: 'photos/' + i + '.jpg',
      description: DESCRIPTION_WORDS[Math.floor(Math.random() * DESCRIPTION_WORDS.length)],
      likes: getRandomInt(15, 250),
      comments: commentsMany
    }
  }
}