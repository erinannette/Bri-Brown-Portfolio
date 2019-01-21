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
  $('.carousel1-pic').click(function () {
    $('.carousel0').hide();
    $('.carousel2').hide();
    $('.carousel3').hide();
    $('.carousel4').hide();
    $('.carousel1').show();
  });
  $('.carousel2-pic').click(function () {
    $('.carousel1').hide();
    $('.carousel3').hide();
    $('.carousel4').hide();
    $('.carousel2').show();
  });
  $('.carousel3-pic').click(function () {
    $('.carousel1').hide();
    $('.carousel2').hide();
    $('.carousel4').hide();
    $('.carousel3').show();
  });
  $('.carousel4-pic').click(function () {
    $('.carousel1').hide();
    $('.carousel2').hide();
    $('.carousel3').hide();
    $('.carousel4').show();
  });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sS0FBSyxHQUFHLFVBQWQ7QUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLEtBQVosRSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxDQUFDLENBQUMsWUFBWTtBQUNWLEVBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0IsS0FBcEIsQ0FBMEIsWUFBWTtBQUNsQyxJQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IsSUFBaEI7QUFDQSxJQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IsSUFBaEI7QUFDQSxJQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IsSUFBaEI7QUFDQSxJQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IsSUFBaEI7QUFFQSxJQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IsSUFBaEI7QUFDSCxHQVBEO0FBUUEsRUFBQSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQixLQUFwQixDQUEwQixZQUFZO0FBQ2xDLElBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQixJQUFoQjtBQUNBLElBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQixJQUFoQjtBQUNBLElBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQixJQUFoQjtBQUVBLElBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQixJQUFoQjtBQUNILEdBTkQ7QUFPQSxFQUFBLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CLEtBQXBCLENBQTBCLFlBQVk7QUFDbEMsSUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCLElBQWhCO0FBQ0EsSUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCLElBQWhCO0FBQ0EsSUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCLElBQWhCO0FBRUEsSUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCLElBQWhCO0FBQ0gsR0FORDtBQU9BLEVBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0IsS0FBcEIsQ0FBMEIsWUFBWTtBQUNsQyxJQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IsSUFBaEI7QUFDQSxJQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IsSUFBaEI7QUFDQSxJQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IsSUFBaEI7QUFFQSxJQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IsSUFBaEI7QUFDSCxHQU5EO0FBT0gsQ0E5QkEsQ0FBRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IGhlbGxvID0gJ0hpIFdvcmxkJztcbmNvbnNvbGUubG9nKGhlbGxvKTtcblxuLy8gU3RlcHM6XG4vLyAxLiBjbGljayBvbiB0aGUgSW1hZ2Vcbi8vIDIuIHRleHQgYXBwZWFycyBiZWxvdyB0aGUgSW1hZ2Vcbi8vIDMuIGNsaWNrIG9uIGEgZGlmZmVyZW50IEltYWdlXG4vLyA0LiB0ZXh0IGZyb20gcHJldmlvdXMgY2xpY2sgZGlzYXBwZWFycyBcbi8vIDUuIG5ldyB0ZXh0IGFwcGVhcnNcblxuXG5cbiQoZnVuY3Rpb24gKCkge1xuICAgICQoJy5jYXJvdXNlbDEtcGljJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuY2Fyb3VzZWwwJykuaGlkZSgpO1xuICAgICAgICAkKCcuY2Fyb3VzZWwyJykuaGlkZSgpO1xuICAgICAgICAkKCcuY2Fyb3VzZWwzJykuaGlkZSgpO1xuICAgICAgICAkKCcuY2Fyb3VzZWw0JykuaGlkZSgpO1xuXG4gICAgICAgICQoJy5jYXJvdXNlbDEnKS5zaG93KCk7XG4gICAgfSk7XG4gICAgJCgnLmNhcm91c2VsMi1waWMnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5jYXJvdXNlbDEnKS5oaWRlKCk7XG4gICAgICAgICQoJy5jYXJvdXNlbDMnKS5oaWRlKCk7XG4gICAgICAgICQoJy5jYXJvdXNlbDQnKS5oaWRlKCk7XG5cbiAgICAgICAgJCgnLmNhcm91c2VsMicpLnNob3coKTtcbiAgICB9KTtcbiAgICAkKCcuY2Fyb3VzZWwzLXBpYycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmNhcm91c2VsMScpLmhpZGUoKTtcbiAgICAgICAgJCgnLmNhcm91c2VsMicpLmhpZGUoKTtcbiAgICAgICAgJCgnLmNhcm91c2VsNCcpLmhpZGUoKTtcblxuICAgICAgICAkKCcuY2Fyb3VzZWwzJykuc2hvdygpO1xuICAgIH0pO1xuICAgICQoJy5jYXJvdXNlbDQtcGljJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuY2Fyb3VzZWwxJykuaGlkZSgpO1xuICAgICAgICAkKCcuY2Fyb3VzZWwyJykuaGlkZSgpO1xuICAgICAgICAkKCcuY2Fyb3VzZWwzJykuaGlkZSgpO1xuXG4gICAgICAgICQoJy5jYXJvdXNlbDQnKS5zaG93KCk7XG4gICAgfSk7XG59KTsiXX0=
