const createPictures = function (pictureObjects) {
  const pictures = document.querySelector('.pictures');
  const templatePicture = document.querySelector('#picture').content;
  const template = templatePicture.querySelector('a');
  const fragment = document.createDocumentFragment();
  pictureObjects.forEach((item) => {
    const element = template.cloneNode(true);
    element.querySelector('img').src = item.url;
    element.querySelector('.picture__likes').textContent = item.likes;
    element.querySelector('.picture__comments').textContent = item.commentValue.length;
    fragment.appendChild(element);
  });
  pictures.appendChild(fragment);
};

export {
  createPictures
};
