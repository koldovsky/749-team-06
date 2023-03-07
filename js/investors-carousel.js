$(document).ready(function () {

  $('.container__carousel-investors').slick({
    autoplay: false,
    pauseOnHover: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.slider__next').click(function () {
    $('.container__carousel-investors').slick('slickNext');
  });

  $('.slider__prev').click(function () {
    $('.container__carousel-investors').slick('slickPrev');
  });



});
