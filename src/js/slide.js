const leftButton = document.querySelector('.swipe-button-left');
const rightButton = document.querySelector('.swipe-button-right');
const cardContainer = document.querySelector('.card-container');

let scrollAmount = 0;
let scrollMin = 0;
const scrollMax = 231;

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
