const hello = 'Hi World';
console.log(hello);

$(function () {
    $('.stage--button').click(function () {
        $('.stage--button').addClass('active');
        $('.screen--button').removeClass('active');
        $('.in-dev--button').removeClass('active');

        $('.screen--section').hide();
        $('.in-dev--section').hide();

        $('.stage--section').show();
    });
    $('.screen--button').click(function () {
        $('.screen--button').addClass('active');
        $('.stage--button').removeClass('active');
        $('.in-dev--button').removeClass('active');

        $('.stage--section').hide();
        $('.in-dev--section').hide();

        $('.screen--section').show();
    });
    $('.in-dev--button').click(function () {
        $('.in-dev--button').addClass('active');
        $('.stage--button').removeClass('active');
        $('.screen--button').removeClass('active');

        $('.stage--section').hide();
        $('.screen--section').hide();

        $('.in-dev--section').show();
    });
});



$(function () {
    $('.stage1-pic').click(function () {
        $('.stage0').hide();
        $('.stage2').hide();
        $('.stage3').hide();
        $('.stage4').hide();

        $('.stage1').show();
    });
    $('.stage2-pic').click(function () {
        $('.stage0').hide();
        $('.stage1').hide();
        $('.stage3').hide();
        $('.stage4').hide();

        $('.stage2').show();
    });
    $('.stage3-pic').click(function () {
        $('.stage0').hide();
        $('.stage1').hide();
        $('.stage2').hide();
        $('.stage4').hide();

        $('.stage3').show();
    });
    $('.stage4-pic').click(function () {
        $('.stage0').hide();
        $('.stage1').hide();
        $('.stage2').hide();
        $('.stage3').hide();

        $('.stage4').show();
    });
});