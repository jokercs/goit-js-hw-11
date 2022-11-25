import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const notifyFailureMessage = () => {
  return Notify.failure(
    'Sorry, there are no images matching your search query. Please try again.',
    {
      opacity: 0.8,
      position: 'center',
      timeout: 300,
      cssAnimationDuration: 800,
      backOverlay: true,
      backOverlayColor: 'rgba(50,198,130,0.2)',
      cssAnimationStyle: 'zoom',
    }
  );
};

export const notifySuccessMessage = totalHits => {
  return Notify.success(`Hooray! We found ${totalHits} images.`, {
    opacity: 0.8,
    position: 'center',
    timeout: 300,
    backOverlay: true,
    cssAnimationDuration: 800,
    backOverlayColor: 'rgba(255,85,73,0.2)',
    cssAnimationStyle: 'zoom',
  });
};
