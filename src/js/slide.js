let scrollAmount = 0;
let scrollMin = 0;
const scrollMax = 231;

[0, 1, 2, 3].forEach(function (index) {
  const leftButton = document.getElementsByClassName('swipe__button-left')[index];
  const rightButton = document.getElementsByClassName('swipe__button-right')[index];
  const cardContainer = document.getElementsByClassName('card__container')[index];

  leftButton.addEventListener('click', function () {
    cardContainer.scrollTo({
      left: Math.min((scrollAmount -= 500), scrollMin),
      behavior: 'smooth',
    });
  });

  rightButton.addEventListener('click', function () {
    cardContainer.scrollTo({
      left: Math.max((scrollAmount += 500), scrollMax),
      behavior: 'smooth',
    });
  });
});
