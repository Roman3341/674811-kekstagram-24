import {
  MAX_COMMENT_LENGTH,
  MAX_HASHTAGS
} from './data.js';

const uploadInput = document.querySelector('.img-upload__input');
uploadInput.addEventListener('change', () => {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
});

const closeButton = document.querySelector('.img-upload__cancel');
const closeUploadForm = function () {
  closeButton.addEventListener('click', () => {
    document.querySelector('.img-upload__overlay').classList.add('hidden');
    uploadInput.value = '';
  });
};

const hashtag = document.querySelector('.text__hashtags');

const isEscapeKey = (evt) => evt.key === 'Escape';
const hashtagCheck = function () {
  const hashtagText = hashtag.value;
  const space = ' ';
  const hashtagsArray = hashtagText.split(space);
  const set = new Set(hashtagsArray);
  const hashtagRegular = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
  document.querySelector('.img-upload__form').addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.stopPropagation();
    }
  });

  if (hashtagsArray.length < MAX_HASHTAGS) {
    hashtagsArray.forEach((element) => {
      if (hashtagRegular.test(element)) {
        if (set.size >= hashtagsArray.length) {
          return true;
        } else {
          return hashtag.setCustomValidity('Введён повторяющийся хэштэг!');
        }
      } else {
        return hashtag.setCustomValidity('Хэштэг введён неверно!');
      }
    });
  } else {
    return hashtag.setCustomValidity('Введено больше пяти хэштегов!');
  }
};

const commentCheck = function () {
  const comment = document.querySelector('.text__description');
  const commentText = document.querySelector('.text__description').value;
  return commentText.length < MAX_COMMENT_LENGTH ? true : comment.setCustomValidity('Комментарий слишком длинный');
};

export {
  closeUploadForm,
  commentCheck,
  hashtagCheck
};
