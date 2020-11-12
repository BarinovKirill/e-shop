var mySwiper = new Swiper('.hero-catalog__slider', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 1,
    // autoplay: {
    //   delay: 5000,
    // },
    // If we need pagination
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })