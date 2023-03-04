(function () {
    const slides = document.querySelectorAll(".slids");
    const nextBtn = document.querySelector('#left_btn');
    const prevBtn = document.querySelector('#right_btn');

    let currentSlideInd = 0;
    let secondSlideInd, thirdSlideInd,four_slids,five_slids;

    function renderSlide() {
        let slidesToShow = [slides[currentSlideInd]];
        const slideContainer = document.querySelector(".block__group");
        if (window.innerWidth > 485) {
            secondSlideInd = currentSlideInd + 1 >= slides.length ? 0 : currentSlideInd + 1;
            slidesToShow.push(slides[secondSlideInd]);
            console.log(slidesToShow)
            if(window.innerWidth > 770) {
            thirdSlideInd = secondSlideInd + 1 >= slides.length ? 0 : secondSlideInd + 1;
            slidesToShow.push(slides[thirdSlideInd]);
            if(window.innerWidth > 990){
            four_slids = thirdSlideInd + 1 >= slides.length ? 0 : thirdSlideInd + 1;
            five_slids = four_slids + 1 >= slides.length ? 0 : four_slids + 1;
            slidesToShow.push(slides[four_slids],slides[five_slids]);
            }
            }
        }
        slideContainer.replaceChildren(...slidesToShow);
    }

    function nextSlide() {
        currentSlideInd = currentSlideInd + 1 >= slides.length ? 0 : currentSlideInd + 1;
        renderSlide();
    }

    function prevSlide() {
        currentSlideInd = currentSlideInd - 1 < 0 ? slides.length - 1 : currentSlideInd - 1;
        renderSlide();
    }

    renderSlide();

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    window.addEventListener('resize', renderSlide)
}
)();