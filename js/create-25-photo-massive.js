import {createPhoto} from './create-photo';

//цикл создания 25ти фото
const photos = [];
for (let i = 1; i <= 25; i++) {
  photos.push(createPhoto(i));
}

export {photos};
