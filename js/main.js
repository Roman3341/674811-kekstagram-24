import {
  createPhotoArray
} from './data.js';

import {
  createPictures
} from './create-picture.js';

import {
  commentCheck, hashtagCheck, closeUploadForm
} from './upload-file.js';
const createdPhotos = createPhotoArray();
createPictures(createdPhotos);

const uploadForm = document.querySelector('.img-upload__form');
closeUploadForm();
uploadForm.addEventListener('submit', (evt) => {
  if(hashtagCheck() !== true || commentCheck() !== true ) {
    evt.preventDefault();
  }
});
