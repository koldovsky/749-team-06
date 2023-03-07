$(document).ready(function () {

  // ----------------------
  // SLIDER INIT
  // ---------------------- 
  $('.container__carousel-investors').slick({
    autoplay: false,
    pauseOnHover: true,
    slidesToShow: 2,
    slidesToScroll:1,
    responsive: [
      {
        breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll:1,
        // centerMode: true, // включить центрирование
        // centerPadding: '20px' // добавить отступы по краям 
        }
      }
    ]
  });

  // ----------------------
  // NEXT BUTTON
  // ---------------------- 
  $('.sliderNext').click(function () {
    $('.container__carousel-investors').slick('slickNext');
  });

  // ----------------------
  // PREVIOUS BUTTON
  // ---------------------- 
  $('.sliderPrev').click(function () {
    $('.container__carousel-investors').slick('slickPrev');
  });



});
