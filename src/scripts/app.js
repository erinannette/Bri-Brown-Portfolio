const hello = 'Hi World';
console.log(hello);

const carousel = (function () {
    let box = document.querySelector('.carouselbox');
    let next = box.querySelector('.next');
    let prev = box.querySelector('.prev');
    let items = box.querySelectorAll('.content li');
    let counter = 0;
    let amount = items.length;
    let current = items[0];
    box.classList.add('active');
    console.log('active added to box');

    function navigate(direction) {
        current.classList.remove('current');
        console.log('current removed from li');

        counter = counter + direction;

        if (direction === -1 &&
            counter < 0) {
            counter = amount - 1;
        }
        if (direction === 1 &&
            !items[counter]) {
            counter = 0;
        }
        current = items[counter];
        current.classList.add('current');
    }
    next.addEventListener('click', function (ev) {
        navigate(1);
    });
    prev.addEventListener('click', function (ev) {
        navigate(-1);
    });
    navigate(0);
})();

$(function () {
    $('.carousel2-pic').click(function () {
        $('.carousel1-text').fadeOut('.hide');
        $('.carousel2-text').fadeIn('.hide');
    });
    $('.carousel3-pic').click(function () {
        $('.carousel2-text').fadeOut('.hide');
        $('.carousel3-text').fadeIn('.hide');
    });
    $('.carousel4-pic').click(function () {
        $('.carousel3-text').fadeOut('.hide');
        $('.carousel4-text').fadeIn('.hide');
    });
});