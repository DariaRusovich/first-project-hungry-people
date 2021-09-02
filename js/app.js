var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 0,
    loop: true,
    speed: 600,
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      
      410: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1200:{
        slidesPerView: 4,
      },
      1400:{
        slidesPerView: 5,
      }
    }

    
  });
  var swiper = new Swiper(".myNewSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
      
    },
   
  });