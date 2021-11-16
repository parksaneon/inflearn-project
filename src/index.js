import './sass/index.scss';

document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const header = document.querySelector('.header');
  const mHeaderBtn = document.querySelector('.header-container__showList');
  let openNav = false;

  mHeaderBtn.addEventListener('click', () => {
    header.classList.add('open-nav');
    openNav = true;
  });

  window.addEventListener('resize', () => {
    if (openNav) {
      openNav = false;
      header.classList.remove('open-nav');
    }
  });

  body.addEventListener('click', (e) => {
    if (openNav && e.target.tagName === 'HEADER') {
      openNav = false;
      header.classList.remove('open-nav');
    }
  });
});
