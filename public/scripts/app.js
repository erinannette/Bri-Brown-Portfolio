(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var hello = 'Hi World';
console.log(hello); // Steps:
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sS0FBSyxHQUFHLFVBQWQ7QUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLEtBQVosRSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxDQUFDLENBQUMsWUFBWTtBQUNWLEVBQUEsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQixLQUFqQixDQUF1QixZQUFZO0FBQy9CLElBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhLElBQWI7QUFDQSxJQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYSxJQUFiO0FBQ0EsSUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWEsSUFBYjtBQUNBLElBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhLElBQWI7QUFFQSxJQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYSxJQUFiO0FBQ0gsR0FQRDtBQVFBLEVBQUEsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQixLQUFqQixDQUF1QixZQUFZO0FBQy9CLElBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhLElBQWI7QUFDQSxJQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYSxJQUFiO0FBQ0EsSUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWEsSUFBYjtBQUNBLElBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhLElBQWI7QUFFQSxJQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYSxJQUFiO0FBQ0gsR0FQRDtBQVFBLEVBQUEsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQixLQUFqQixDQUF1QixZQUFZO0FBQy9CLElBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhLElBQWI7QUFDQSxJQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYSxJQUFiO0FBQ0EsSUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWEsSUFBYjtBQUNBLElBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhLElBQWI7QUFFQSxJQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYSxJQUFiO0FBQ0gsR0FQRDtBQVFBLEVBQUEsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQixLQUFqQixDQUF1QixZQUFZO0FBQy9CLElBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhLElBQWI7QUFDQSxJQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYSxJQUFiO0FBQ0EsSUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWEsSUFBYjtBQUNBLElBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhLElBQWI7QUFFQSxJQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYSxJQUFiO0FBQ0gsR0FQRDtBQVFILENBakNBLENBQUQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBoZWxsbyA9ICdIaSBXb3JsZCc7XG5jb25zb2xlLmxvZyhoZWxsbyk7XG5cbi8vIFN0ZXBzOlxuLy8gMS4gY2xpY2sgb24gdGhlIEltYWdlXG4vLyAyLiB0ZXh0IGFwcGVhcnMgYmVsb3cgdGhlIEltYWdlXG4vLyAzLiBjbGljayBvbiBhIGRpZmZlcmVudCBJbWFnZVxuLy8gNC4gdGV4dCBmcm9tIHByZXZpb3VzIGNsaWNrIGRpc2FwcGVhcnMgXG4vLyA1LiBuZXcgdGV4dCBhcHBlYXJzXG5cblxuXG4kKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuc3RhZ2UxLXBpYycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLnN0YWdlMCcpLmhpZGUoKTtcbiAgICAgICAgJCgnLnN0YWdlMicpLmhpZGUoKTtcbiAgICAgICAgJCgnLnN0YWdlMycpLmhpZGUoKTtcbiAgICAgICAgJCgnLnN0YWdlNCcpLmhpZGUoKTtcblxuICAgICAgICAkKCcuc3RhZ2UxJykuc2hvdygpO1xuICAgIH0pO1xuICAgICQoJy5zdGFnZTItcGljJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuc3RhZ2UwJykuaGlkZSgpO1xuICAgICAgICAkKCcuc3RhZ2UxJykuaGlkZSgpO1xuICAgICAgICAkKCcuc3RhZ2UzJykuaGlkZSgpO1xuICAgICAgICAkKCcuc3RhZ2U0JykuaGlkZSgpO1xuXG4gICAgICAgICQoJy5zdGFnZTInKS5zaG93KCk7XG4gICAgfSk7XG4gICAgJCgnLnN0YWdlMy1waWMnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5zdGFnZTAnKS5oaWRlKCk7XG4gICAgICAgICQoJy5zdGFnZTEnKS5oaWRlKCk7XG4gICAgICAgICQoJy5zdGFnZTInKS5oaWRlKCk7XG4gICAgICAgICQoJy5zdGFnZTQnKS5oaWRlKCk7XG5cbiAgICAgICAgJCgnLnN0YWdlMycpLnNob3coKTtcbiAgICB9KTtcbiAgICAkKCcuc3RhZ2U0LXBpYycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLnN0YWdlMCcpLmhpZGUoKTtcbiAgICAgICAgJCgnLnN0YWdlMScpLmhpZGUoKTtcbiAgICAgICAgJCgnLnN0YWdlMicpLmhpZGUoKTtcbiAgICAgICAgJCgnLnN0YWdlMycpLmhpZGUoKTtcblxuICAgICAgICAkKCcuc3RhZ2U0Jykuc2hvdygpO1xuICAgIH0pO1xufSk7Il19
