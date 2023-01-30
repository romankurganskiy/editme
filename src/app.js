const swiper = new Swiper('.review-slider', {
    // Optional parameters

    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});

const hamburger = document.getElementsByClassName('header__burger')[0];
const navOverlay = document.getElementsByClassName('nav-overlay')[0];
const nav = document.getElementsByClassName('header__menu-mobile')[0];
  
const toggleMenu = () => {
  nav.classList.toggle('header__menu-mobile--open');
  navOverlay.classList.toggle('nav-overlay--show');
};
  
hamburger.addEventListener('click', toggleMenu);
navOverlay.addEventListener('click', toggleMenu);



const reserve =  document.getElementsByClassName('reserve-button')[0];
const modal = document.getElementsByClassName('reserve-modal')[0];
const modalOverlay = document.getElementsByClassName('modal-overlay')[0];
const submitReserve = document.getElementsByClassName('submit-reserve')[0];

const toggleReserveModal = () => {
  modal.classList.toggle('reserve-modal--open')
  modalOverlay.classList.toggle('modal-overlay--show');
}

reserve.addEventListener('click', toggleReserveModal);
modalOverlay.addEventListener('click', toggleReserveModal);
submitReserve.addEventListener('click', toggleReserveModal);

function send(e,form) {
  fetch('/reserve', { method:'post', body: new FormData(form) });

  e.preventDefault();
}

const form = document.getElementById('reserve-form');
form.addEventListener('submit', (e) => send(e,form));