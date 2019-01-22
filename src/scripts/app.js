const hello = 'Hi World';
console.log(hello);

// Steps:
// 1. click on the Image
// 2. text appears below the Image
// 3. click on a different Image
// 4. text from previous click disappears 
// 5. new text appears



$(function () {
    $('.carousel1-pic').click(function () {
        $('.carousel0').hide();
        $('.carousel2').hide();
        $('.carousel3').hide();
        $('.carousel4').hide();

        $('.carousel1').show();
    });
    $('.carousel2-pic').click(function () {
        $('.carousel0').hide();
        $('.carousel1').hide();
        $('.carousel3').hide();
        $('.carousel4').hide();

        $('.carousel2').show();
    });
    $('.carousel3-pic').click(function () {
        $('.carousel0').hide();
        $('.carousel1').hide();
        $('.carousel2').hide();
        $('.carousel4').hide();

        $('.carousel3').show();
    });
    $('.carousel4-pic').click(function () {
        $('.carousel0').hide();
        $('.carousel1').hide();
        $('.carousel2').hide();
        $('.carousel3').hide();

        $('.carousel4').show();
    });
});