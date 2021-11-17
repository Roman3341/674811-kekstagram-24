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
  const hashtagsArray = hashtagText.split(space); //Проблема - не создается массив
  const hashtagRegular = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
  document.querySelector('.img-upload__form').addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.stopPropagation();
    }
  });
  if (hashtagsArray.length < 5) {
    hashtagsArray.forEach((item) => {
      if (hashtagRegular.test(item)) {
        const set = new Set(hashtagsArray);
        if (set.size < hashtagsArray.length) {
          return hashtag;
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

const commentCheck = function(comment) {
  comment = document.querySelector('.text__description');
  const commentText = document.querySelector('.text__description').value;
  if (commentText < 140 ) {
    return commentText;
  } else {
    return comment.setCustomValidity('Комментарий слишком длинный');
  }
};

export {closeUploadForm, commentCheck, hashtagCheck};
