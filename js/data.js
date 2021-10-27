import {
  getRandomInt
} from './utils.js';

//Константы
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
  'шланг',
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
  'Светлана',
];

const COMMENT_MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

//объект комментария
const createComment = function (photoId, commentId) {
  return {
    id: photoId * 10 + commentId,
    avatar: `img/avatar-${getRandomInt(0, 6)}.jpg`,
    message: COMMENT_MESSAGE[Math.floor(Math.random() * COMMENT_MESSAGE.length)],
    name: COMMENT_NAMES[Math.floor(Math.random() * COMMENT_NAMES.length)],
  };
};

const createPhoto = (id) => {
  const comments = [];
  //цикл генерирования массива с комментариями
  for (let j = getRandomInt(0, 10); j <= 10; j++) {
    comments.push(createComment(id, j));
  }
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: DESCRIPTION_WORDS[Math.floor(Math.random() * DESCRIPTION_WORDS.length)],
    likes: getRandomInt(15, 250),
    commentValue: comments,
  };
};
//функция создания 25ти фото
const createPhotoMassive = function () {
  const photos = [];
  for (let i = 1; i <= 25; i++) {
    photos.push(createPhoto(i));
  }
  return photos;
};

export {createPhotoMassive};
