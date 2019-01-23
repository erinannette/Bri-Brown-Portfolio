const hello = 'Hi World';
console.log(hello);

$(function () {
    $('.stage--button').click(function () {
        $('.stage--button').add('.active');
        // $('.screen--button').remove('.active');
        // $('.in-dev--button').remove('.active');

        $('.screen--section').hide();
        $('.in-dev--section').hide();

        $('.stage--section').show();
    });
    $('.screen--button').click(function () {
        $('.screen--button').add('.active');
        // $('.stage--button').remove('.active');
        // $('.in-dev--button').remove('.active');

        $('.stage--section').hide();
        $('.in-dev--section').hide();

        $('.screen--section').show();
    });
    $('.in-dev--button').click(function () {
        $('.in-dev--button').add('.active');
        // $('.stage--button').remove('.active');
        // $('.screen--button').remove('.active');

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