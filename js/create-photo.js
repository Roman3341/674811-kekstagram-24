import {getRandomInt} from '.utils/get-random-integer';
import { DESCRIPTION_WORDS } from './constants';
import { createComment } from './create-comment';

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
export {createPhoto};
