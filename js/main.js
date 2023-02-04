$('.burger').on('click', function() {
  document.body.classList.toggle('_lock');
  $('.menu_mobile').toggleClass('menu_open');
});
$('.burger').click(function(){
  $('.span_burger:nth-child(1)').toggleClass('first');
  $('.span_burger:nth-child(2)').toggleClass('middle');
  $('.span_burger:nth-child(3)').toggleClass('last');
});
$( '.menu_mobile li a' ).on("click", function(){
  $('.menu_mobile').removeClass('menu_open');
  $('body').removeClass('_lock');
  $('.span_burger:nth-child(1)').removeClass('first');
  $('.span_burger:nth-child(2)').removeClass('middle');
  $('.span_burger:nth-child(3)').removeClass('last');
});




var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-right",
        prevEl: ".swiper-button-left",
      },
  });
