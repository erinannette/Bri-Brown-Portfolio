const hello = 'Hi World';
console.log(hello);


$(function () {
    $('.carousel1-pic').click(function () {
        $('.carousel1-text').fadeIn('.hide');
    });
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