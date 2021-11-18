function modalControll(opens, closes, modals) {
  const open = document.querySelector(opens);
  const close = document.querySelector(closes);
  const modal = document.querySelector(modals);

  open.addEventListener('click', function () {
    if (modals === '.modal') {
      setTimeout(function () {
        document.getElementById('id').focus();
      }, 2);
    }
    modal.classList.remove('hidden');
  });

  close.addEventListener('click', function () {
    modal.classList.add('hidden');
  });
}

//로그인 모달
modalControll('.signin', '.login-exit', '.modal');
// 이벤트 모달
modalControll('.event-button', '.event-all__close', '.event-all');

const passwordToggle = document.querySelector('.login-form__toggle');

const input = document.querySelector('#password');

const icon = document.querySelector('.toggle-icon');

let password = true;

passwordToggle.addEventListener('click', () => {
  if (password) {
    input.setAttribute('type', 'text');
    icon.setAttribute('class', 'fas fa-eye-slash');
  } else {
    input.setAttribute('type', 'password');
    icon.setAttribute('class', 'far fa-eye');
  }

  password = !password;
});
