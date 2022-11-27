import { refs } from './refs';

refs.themeBtnRef.addEventListener('click', themeChange);

function themeChange() {
  const isLight =
    refs.themeBtnRef.getAttribute('data-current') === 'true' || false;
  console.log(isLight);

  refs.darkIconRef.classList.toggle('is-hidden');
  refs.themeBtnRef.setAttribute('data-current', !isLight);
  if (!isLight) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
}
