import './sass/index.scss';
import './js/header';

const leftButton = document.querySelector('.swipe-button-left');
const rightButton = document.querySelector('.swipe-button-right');

const cardContainer = document.querySelector('.card-container');
const card = document.querySelector('.card');
var scrollAmount = 0;
var scrollMin = 0;
var scrollMax = card.clientWidth;

leftButton.onclick = function () {
  cardContainer.scrollTo({
    left: Math.min((scrollAmount -= 500), scrollMin),
    behavior: 'smooth',
  });
};

rightButton.onclick = function () {
  cardContainer.scrollTo({
    left: Math.max((scrollAmount += 500), scrollMax),
    behavior: 'smooth',
  });
};
