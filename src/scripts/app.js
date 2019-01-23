const hello = 'Hi World';
console.log(hello);

// Steps:
// 1. click on the Image
// 2. text appears below the Image
// 3. click on a different Image
// 4. text from previous click disappears 
// 5. new text appears



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