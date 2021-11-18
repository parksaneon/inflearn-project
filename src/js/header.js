document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const header = document.querySelector('.header');
  const heaederList = document.querySelector('.header-container__list');
  const mHeaderBtn = document.querySelector('.header-container__showList');
  const headerLinks = document.querySelectorAll('.header-container__list > li > a');
  const headerSubList = document.querySelectorAll('.header-container__list--lecture--one');
  const headerSubListTwo = document.querySelectorAll('.header-container__list--lecture--two');

  let openNav = false;
  let focused = null;
  let focusDist = null;
  let prevKey = null;
  let openSub = false;

  // mobile header nav
  mHeaderBtn.addEventListener('click', (e) => {
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

  const removeOpen = () => {
    document.querySelectorAll('.open').forEach((openMenu) => openMenu.classList.remove('open'));
  };

  // header focus
  headerLinks.forEach((link) => {
    link.addEventListener('focusin', (e) => {
      removeOpen();
      focused = e.target.nextElementSibling ? e.target : null;
    });
  });

  headerSubList.forEach((submenu) => {
    const subLinks = Array.from(
      submenu.querySelectorAll('.header-container__list--lecture--one > li > a')
    );

    const lastMenuLink = subLinks[subLinks.length - 1];

    lastMenuLink.addEventListener('blur', () => {
      if (window.innerWidth > 1000 && focusDist === 'next') submenu.classList.remove('open');
    });

    subLinks.forEach((oneLink) => {
      oneLink.addEventListener('mouseover', (e) => {
        removeOpen();
        openSub = true;
        if (e.target.nextElementSibling) e.target.nextElementSibling.classList.add('open');
      });
    });

    submenu.addEventListener('mouseleave', (e) => {
      e.target.classList.remove('open');
      openSub = false;
    });
  });

  headerSubListTwo.forEach((dephTwo) => {
    dephTwo.firstElementChild.firstElementChild.addEventListener('mouseover', (e) => {
      if (e.target.nextElementSibling) e.target.nextElementSibling.classList.add('open');
    });

    dephTwo.firstElementChild.firstElementChild.addEventListener('mouseleave', (e) => {
      if (e.target.nextElementSibling) e.target.nextElementSibling.classList.remove('open');
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && focused && focused.nextElementSibling && window.innerWidth > 1000) {
      removeOpen();
      focused.nextElementSibling.classList.add('open');
      focused.nextElementSibling.querySelector('a:first-child').focus();
      focused = null;
    } else if (e.key === 'Shift') {
      prevKey = 'Shift';
    } else if (e.key === 'Tab') {
      focusDist = prevKey === 'Shift' ? 'prev' : 'next';
      prevKey = null;
    }
  });

  heaederList.addEventListener('mouseleave', (e) => {
    removeOpen();
  });

  headerLinks.forEach((link) => {
    link.addEventListener('mouseover', (e) => {
      removeOpen();
      if (e.target.nextElementSibling) e.target.nextElementSibling.classList.add('open');
    });
  });
});
