(() => {
    document.querySelector('.burger').addEventListener('click', function () {
        this.classList.toggle('active');
        document.querySelector('.heder__burger-open').classList.toggle('open')
        document.querySelector('body').classList.toggle('overflow');
        document.querySelector('.header__menu').classList.toggle('burger-open');
        document.querySelector('.burger__contacts').classList.toggle('burger-open');
        document.querySelector('main').classList.toggle('display');
    })
    document.querySelector('.list').addEventListener('click', function () {
        document.querySelector('.burger').classList.toggle('active')
        document.querySelector('.heder__burger-open').classList.toggle('open')
        document.querySelector('body').classList.toggle('overflow');
        document.querySelector('.header__menu').classList.toggle('burger-open');
        document.querySelector('main').classList.toggle('display');
    })
})()