import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

iziToast.settings({
  messageSize: '20',
  position: 'topRight',
  progressBar: false,
  messageColor: 'white',
  messageLineHeight: '24',
  close: false,
  maxWidth: 400,
});

export default iziToast;
