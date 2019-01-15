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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sS0FBSyxHQUFHLFVBQWQ7QUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLEtBQVo7O0FBRUEsSUFBTSxRQUFRLEdBQUksWUFBWTtBQUMxQixNQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixjQUF2QixDQUFWO0FBQ0EsTUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLGFBQUosQ0FBa0IsT0FBbEIsQ0FBWDtBQUNBLE1BQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxhQUFKLENBQWtCLE9BQWxCLENBQVg7QUFDQSxNQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsZ0JBQUosQ0FBcUIsYUFBckIsQ0FBWjtBQUNBLE1BQUksT0FBTyxHQUFHLENBQWQ7QUFDQSxNQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBbkI7QUFDQSxNQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBRCxDQUFuQjtBQUNBLEVBQUEsR0FBRyxDQUFDLFNBQUosQ0FBYyxHQUFkLENBQWtCLFFBQWxCO0FBQ0EsRUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLHFCQUFaOztBQUVBLFdBQVMsUUFBVCxDQUFrQixTQUFsQixFQUE2QjtBQUN6QixJQUFBLE9BQU8sQ0FBQyxTQUFSLENBQWtCLE1BQWxCLENBQXlCLFNBQXpCO0FBQ0EsSUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLHlCQUFaO0FBRUEsSUFBQSxPQUFPLEdBQUcsT0FBTyxHQUFHLFNBQXBCOztBQUVBLFFBQUksU0FBUyxLQUFLLENBQUMsQ0FBZixJQUNBLE9BQU8sR0FBRyxDQURkLEVBQ2lCO0FBQ2IsTUFBQSxPQUFPLEdBQUcsTUFBTSxHQUFHLENBQW5CO0FBQ0g7O0FBQ0QsUUFBSSxTQUFTLEtBQUssQ0FBZCxJQUNBLENBQUMsS0FBSyxDQUFDLE9BQUQsQ0FEVixFQUNxQjtBQUNqQixNQUFBLE9BQU8sR0FBRyxDQUFWO0FBQ0g7O0FBQ0QsSUFBQSxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQUQsQ0FBZjtBQUNBLElBQUEsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsR0FBbEIsQ0FBc0IsU0FBdEI7QUFDSDs7QUFDRCxFQUFBLElBQUksQ0FBQyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixVQUFVLEVBQVYsRUFBYztBQUN6QyxJQUFBLFFBQVEsQ0FBQyxDQUFELENBQVI7QUFDSCxHQUZEO0FBR0EsRUFBQSxJQUFJLENBQUMsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBVSxFQUFWLEVBQWM7QUFDekMsSUFBQSxRQUFRLENBQUMsQ0FBQyxDQUFGLENBQVI7QUFDSCxHQUZEO0FBR0EsRUFBQSxRQUFRLENBQUMsQ0FBRCxDQUFSO0FBQ0gsQ0FuQ2dCLEVBQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgaGVsbG8gPSAnSGkgV29ybGQnO1xuY29uc29sZS5sb2coaGVsbG8pO1xuXG5jb25zdCBjYXJvdXNlbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbGJveCcpO1xuICAgIGxldCBuZXh0ID0gYm94LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0Jyk7XG4gICAgbGV0IHByZXYgPSBib3gucXVlcnlTZWxlY3RvcignLnByZXYnKTtcbiAgICBsZXQgaXRlbXMgPSBib3gucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRlbnQgbGknKTtcbiAgICBsZXQgY291bnRlciA9IDA7XG4gICAgbGV0IGFtb3VudCA9IGl0ZW1zLmxlbmd0aDtcbiAgICBsZXQgY3VycmVudCA9IGl0ZW1zWzBdO1xuICAgIGJveC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBjb25zb2xlLmxvZygnYWN0aXZlIGFkZGVkIHRvIGJveCcpO1xuXG4gICAgZnVuY3Rpb24gbmF2aWdhdGUoZGlyZWN0aW9uKSB7XG4gICAgICAgIGN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xuICAgICAgICBjb25zb2xlLmxvZygnY3VycmVudCByZW1vdmVkIGZyb20gbGknKTtcblxuICAgICAgICBjb3VudGVyID0gY291bnRlciArIGRpcmVjdGlvbjtcblxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAtMSAmJlxuICAgICAgICAgICAgY291bnRlciA8IDApIHtcbiAgICAgICAgICAgIGNvdW50ZXIgPSBhbW91bnQgLSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IDEgJiZcbiAgICAgICAgICAgICFpdGVtc1tjb3VudGVyXSkge1xuICAgICAgICAgICAgY291bnRlciA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudCA9IGl0ZW1zW2NvdW50ZXJdO1xuICAgICAgICBjdXJyZW50LmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgICB9XG4gICAgbmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldikge1xuICAgICAgICBuYXZpZ2F0ZSgxKTtcbiAgICB9KTtcbiAgICBwcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIG5hdmlnYXRlKC0xKTtcbiAgICB9KTtcbiAgICBuYXZpZ2F0ZSgwKTtcbn0pKCk7Il19
