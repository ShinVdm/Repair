const burger = document.querySelector('.burger');
const menuMobile = document.querySelector('.menu_mobile');

burger.addEventListener('click', () =>{
  menuMobile.classList.toggle('menu_open');
});

var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-right",
        prevEl: ".swiper-button-left",
      },
  });
