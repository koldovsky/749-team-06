
(function () {

    const slides = [
        '<div class="background_carousel__test"><div class="features__carousel-information-test"><p class="features__carousel-title">Zero Fee</p><p class="features__carousel-benefit">Yes, the fee is really zero! In addition, we work with the best trading platforms and offer the best rate in the market. </p></div></div>'

    ];

    let currentSlide = 0;

    function renderSlides(slides) {
        const slidesContainer = document.querySelector('.products-carousel__slides');
        slidesContainer.innerHTML = slides[currentSlide];
  /*       if (window.innerWidth > 768) {
            const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
            slidesContainer.innerHTML += slides[secondSlide];
            if (window.innerWidth > 900) {
                const thirdSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
                slidesContainer.innerHTML += slides[thirdSlide];
            }
        } */
    }

    function nextSlide() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        renderSlides(slides);
    }

/*     function prevSlide() {
        currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
        renderSlides(slides);
    } */

    setInterval(nextSlide, 3000);

    renderSlides(slides);

/*     const nextButton = document.querySelector('.products-carousel__next');
    nextButton.addEventListener('click', nextSlide);

    const prevButton = document.querySelector('.products-carousel__prev');
    prevButton.addEventListener('click', prevSlide);

    window.addEventListener('resize', () => {
        renderSlides(slides);
    }); */
})();