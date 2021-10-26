//объект комментария
import {getRandomInt} from './utils/get-random-integer.js';
import { COMMENT_MESSAGE, COMMENT_NAMES } from './constants.js';

const createComment = function (photoId, commentId) {
  return {
    id: photoId * 10 + commentId,
    avatar: `img/avatar-${getRandomInt(0, 6)}.jpg`,
    message: COMMENT_MESSAGE[Math.floor(Math.random() * COMMENT_MESSAGE.length)],
    name: COMMENT_NAMES[Math.floor(Math.random() * COMMENT_NAMES.length)],
  };
};

export {createComment};
