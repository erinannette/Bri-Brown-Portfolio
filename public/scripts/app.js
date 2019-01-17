(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var hello = 'Hi World';
console.log(hello);

var carousel = function () {
  var box = document.querySelector('.carouselbox');
  var next = box.querySelector('.next');
  var prev = box.querySelector('.prev');
  var items = box.querySelectorAll('.content li');
  var counter = 0;
  var amount = items.length;
  var current = items[0];
  box.classList.add('active');
  console.log('active added to box');

  function navigate(direction) {
    current.classList.remove('current');
    console.log('current removed from li');
    counter = counter + direction;

    if (direction === -1 && counter < 0) {
      counter = amount - 1;
    }

    if (direction === 1 && !items[counter]) {
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
}();

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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sS0FBSyxHQUFHLFVBQWQ7QUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLEtBQVo7O0FBRUEsSUFBTSxRQUFRLEdBQUksWUFBWTtBQUMxQixNQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixjQUF2QixDQUFWO0FBQ0EsTUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLGFBQUosQ0FBa0IsT0FBbEIsQ0FBWDtBQUNBLE1BQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxhQUFKLENBQWtCLE9BQWxCLENBQVg7QUFDQSxNQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsZ0JBQUosQ0FBcUIsYUFBckIsQ0FBWjtBQUNBLE1BQUksT0FBTyxHQUFHLENBQWQ7QUFDQSxNQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBbkI7QUFDQSxNQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBRCxDQUFuQjtBQUNBLEVBQUEsR0FBRyxDQUFDLFNBQUosQ0FBYyxHQUFkLENBQWtCLFFBQWxCO0FBQ0EsRUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLHFCQUFaOztBQUVBLFdBQVMsUUFBVCxDQUFrQixTQUFsQixFQUE2QjtBQUN6QixJQUFBLE9BQU8sQ0FBQyxTQUFSLENBQWtCLE1BQWxCLENBQXlCLFNBQXpCO0FBQ0EsSUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLHlCQUFaO0FBRUEsSUFBQSxPQUFPLEdBQUcsT0FBTyxHQUFHLFNBQXBCOztBQUVBLFFBQUksU0FBUyxLQUFLLENBQUMsQ0FBZixJQUNBLE9BQU8sR0FBRyxDQURkLEVBQ2lCO0FBQ2IsTUFBQSxPQUFPLEdBQUcsTUFBTSxHQUFHLENBQW5CO0FBQ0g7O0FBQ0QsUUFBSSxTQUFTLEtBQUssQ0FBZCxJQUNBLENBQUMsS0FBSyxDQUFDLE9BQUQsQ0FEVixFQUNxQjtBQUNqQixNQUFBLE9BQU8sR0FBRyxDQUFWO0FBQ0g7O0FBQ0QsSUFBQSxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQUQsQ0FBZjtBQUNBLElBQUEsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsR0FBbEIsQ0FBc0IsU0FBdEI7QUFDSDs7QUFDRCxFQUFBLElBQUksQ0FBQyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixVQUFVLEVBQVYsRUFBYztBQUN6QyxJQUFBLFFBQVEsQ0FBQyxDQUFELENBQVI7QUFDSCxHQUZEO0FBR0EsRUFBQSxJQUFJLENBQUMsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBVSxFQUFWLEVBQWM7QUFDekMsSUFBQSxRQUFRLENBQUMsQ0FBQyxDQUFGLENBQVI7QUFDSCxHQUZEO0FBR0EsRUFBQSxRQUFRLENBQUMsQ0FBRCxDQUFSO0FBQ0gsQ0FuQ2dCLEVBQWpCOztBQXFDQSxDQUFDLENBQUMsWUFBWTtBQUNWLEVBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0IsS0FBcEIsQ0FBMEIsWUFBWTtBQUNsQyxJQUFBLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCLE9BQXJCLENBQTZCLE9BQTdCO0FBQ0EsSUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQixNQUFyQixDQUE0QixPQUE1QjtBQUNILEdBSEQ7QUFJQSxFQUFBLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CLEtBQXBCLENBQTBCLFlBQVk7QUFDbEMsSUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQixPQUFyQixDQUE2QixPQUE3QjtBQUNBLElBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUIsTUFBckIsQ0FBNEIsT0FBNUI7QUFDSCxHQUhEO0FBSUEsRUFBQSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQixLQUFwQixDQUEwQixZQUFZO0FBQ2xDLElBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUIsT0FBckIsQ0FBNkIsT0FBN0I7QUFDQSxJQUFBLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCLE1BQXJCLENBQTRCLE9BQTVCO0FBQ0gsR0FIRDtBQUlILENBYkEsQ0FBRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IGhlbGxvID0gJ0hpIFdvcmxkJztcbmNvbnNvbGUubG9nKGhlbGxvKTtcblxuY29uc3QgY2Fyb3VzZWwgPSAoZnVuY3Rpb24gKCkge1xuICAgIGxldCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxib3gnKTtcbiAgICBsZXQgbmV4dCA9IGJveC5xdWVyeVNlbGVjdG9yKCcubmV4dCcpO1xuICAgIGxldCBwcmV2ID0gYm94LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2Jyk7XG4gICAgbGV0IGl0ZW1zID0gYm94LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250ZW50IGxpJyk7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGxldCBhbW91bnQgPSBpdGVtcy5sZW5ndGg7XG4gICAgbGV0IGN1cnJlbnQgPSBpdGVtc1swXTtcbiAgICBib3guY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgY29uc29sZS5sb2coJ2FjdGl2ZSBhZGRlZCB0byBib3gnKTtcblxuICAgIGZ1bmN0aW9uIG5hdmlnYXRlKGRpcmVjdGlvbikge1xuICAgICAgICBjdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2N1cnJlbnQgcmVtb3ZlZCBmcm9tIGxpJyk7XG5cbiAgICAgICAgY291bnRlciA9IGNvdW50ZXIgKyBkaXJlY3Rpb247XG5cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gLTEgJiZcbiAgICAgICAgICAgIGNvdW50ZXIgPCAwKSB7XG4gICAgICAgICAgICBjb3VudGVyID0gYW1vdW50IC0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAxICYmXG4gICAgICAgICAgICAhaXRlbXNbY291bnRlcl0pIHtcbiAgICAgICAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnQgPSBpdGVtc1tjb3VudGVyXTtcbiAgICAgICAgY3VycmVudC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG4gICAgfVxuICAgIG5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgbmF2aWdhdGUoMSk7XG4gICAgfSk7XG4gICAgcHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldikge1xuICAgICAgICBuYXZpZ2F0ZSgtMSk7XG4gICAgfSk7XG4gICAgbmF2aWdhdGUoMCk7XG59KSgpO1xuXG4kKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuY2Fyb3VzZWwyLXBpYycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmNhcm91c2VsMS10ZXh0JykuZmFkZU91dCgnLmhpZGUnKTtcbiAgICAgICAgJCgnLmNhcm91c2VsMi10ZXh0JykuZmFkZUluKCcuaGlkZScpO1xuICAgIH0pO1xuICAgICQoJy5jYXJvdXNlbDMtcGljJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuY2Fyb3VzZWwyLXRleHQnKS5mYWRlT3V0KCcuaGlkZScpO1xuICAgICAgICAkKCcuY2Fyb3VzZWwzLXRleHQnKS5mYWRlSW4oJy5oaWRlJyk7XG4gICAgfSk7XG4gICAgJCgnLmNhcm91c2VsNC1waWMnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5jYXJvdXNlbDMtdGV4dCcpLmZhZGVPdXQoJy5oaWRlJyk7XG4gICAgICAgICQoJy5jYXJvdXNlbDQtdGV4dCcpLmZhZGVJbignLmhpZGUnKTtcbiAgICB9KTtcbn0pOyJdfQ==
