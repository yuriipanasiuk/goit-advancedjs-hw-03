import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { refs } from './refs.js';

const galleryLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

export const createGallery = images => {
  const markup = images.reduce(
    (acc, image) =>
      acc +
      `<li class="gallery-item">
      <a href="${image.largeImageURL}">
      <img class ="gallery-image"  src="${image.webformatURL}" alt="${image.tags}" loading="lazy"/></a>
    <div class="info">
      <p class="info-item">
        <b>Likes: </b>${image.likes}
      </p>
      <p class="info-item">
        <b>Views: </b>${image.views}
      </p>
      <p class="info-item">
        <b>Comments: </b>${image.comments}
      </p>
      <p class="info-item">
        <b>Downloads: </b>${image.downloads}
      </p>
    </div>
  </li>`,
    ''
  );

  refs.gallery.insertAdjacentHTML('beforeend', markup);
  galleryLightbox.refresh();
};

export const clearGallery = () => {
  refs.gallery.innerHTML = '';
};

export const showLoader = () => {
  refs.loader.classList.add('isActive');
};

export const hideLoader = () => {
  refs.loader.classList.remove('isActive');
};
