var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 1,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  })