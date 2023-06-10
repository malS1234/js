'use strict';

const btns = document.querySelectorAll('.btn');

btns.forEach(el => {
  el.addEventListener('click', e => {
    let modalOverlay = document.querySelector('.modal-overlay');

    let path = e.currentTarget.getAttribute('data-path');

    let nowActive = document.querySelector(`[data-target="${path}"]`);

    modalOverlay.classList.add('modal-overlay--visible');

    nowActive.classList.add('modal--visible');

    modalOverlay.addEventListener('click', e => {
      let modals = document.querySelectorAll('.modal');

      if (e.target === modalOverlay) {
        modals.forEach(el => el.classList.remove('modal--visible'));

        e.target.classList.remove('modal-overlay--visible');
      }
    });
  });
});
