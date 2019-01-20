const hello = 'Hi World';
console.log(hello);

// function clearBox(elementID) {
//     document.getElementById(elementID).innerHTML = "";
// };

$(function () {
    $('.carousel1-pic').click(function () {
        // $('.text-container').html("");
        $('.carousel1').fadeIn('.hide');
    });
    $('.carousel2-pic').click(function () {
        $('.text-container').html("");
        $('.carousel2').fadeIn('.hide');
    });
    $('.carousel3-pic').click(function () {
        $('.text-container').html("");
        $('.carousel3').fadeIn('.hide');
    });
    $('.carousel4-pic').click(function () {
        $('.text-container').html("");
        $('.carousel4').fadeIn('.hide');
    });
});