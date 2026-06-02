import { getImagesByQuery } from './js/pixabay-api.js';
import iziToast from './js/toast.js';
import { refs } from './js/refs.js';
import { clearGallery, createGallery, hideLoader, showLoader } from './js/render-functions.js';

const onSearchImage = e => {
  e.preventDefault();

  const query = e.target.elements['search-text'].value.trim();

  if (!query) {
    iziToast.error({ message: 'Please enter a search query!' });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(response => {
      const data = response.data;

      if (data.hits.length === 0) {
        iziToast.show({
          backgroundColor: 'red',
          message: 'Sorry, there are no images matching your search query. Please try again!',
        });

        clearGallery();
        return;
      }

      createGallery(data.hits);
      e.target.reset();
    })
    .catch(() =>
      iziToast.show({
        backgroundColor: '#EF4040',
        message: 'Something went wrong!',
      })
    )
    .finally(() => {
      hideLoader();
    });
};

refs.form.addEventListener('submit', onSearchImage);
