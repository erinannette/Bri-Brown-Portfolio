(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var hello = 'Hi World';
console.log(hello);

carousel = function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sS0FBSyxHQUFHLFVBQWQ7QUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLEtBQVo7O0FBRUEsUUFBUSxHQUFJLFlBQVk7QUFDcEIsTUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBVjtBQUNBLE1BQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxhQUFKLENBQWtCLE9BQWxCLENBQVg7QUFDQSxNQUFJLElBQUksR0FBRyxHQUFHLENBQUMsYUFBSixDQUFrQixPQUFsQixDQUFYO0FBQ0EsTUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLGdCQUFKLENBQXFCLGFBQXJCLENBQVo7QUFDQSxNQUFJLE9BQU8sR0FBRyxDQUFkO0FBQ0EsTUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQW5CO0FBQ0EsTUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUQsQ0FBbkI7QUFDQSxFQUFBLEdBQUcsQ0FBQyxTQUFKLENBQWMsR0FBZCxDQUFrQixRQUFsQjtBQUNBLEVBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxxQkFBWjs7QUFFQSxXQUFTLFFBQVQsQ0FBa0IsU0FBbEIsRUFBNkI7QUFDekIsSUFBQSxPQUFPLENBQUMsU0FBUixDQUFrQixNQUFsQixDQUF5QixTQUF6QjtBQUNBLElBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSx5QkFBWjtBQUVBLElBQUEsT0FBTyxHQUFHLE9BQU8sR0FBRyxTQUFwQjs7QUFFQSxRQUFJLFNBQVMsS0FBSyxDQUFDLENBQWYsSUFDQSxPQUFPLEdBQUcsQ0FEZCxFQUNpQjtBQUNiLE1BQUEsT0FBTyxHQUFHLE1BQU0sR0FBRyxDQUFuQjtBQUNIOztBQUNELFFBQUksU0FBUyxLQUFLLENBQWQsSUFDQSxDQUFDLEtBQUssQ0FBQyxPQUFELENBRFYsRUFDcUI7QUFDakIsTUFBQSxPQUFPLEdBQUcsQ0FBVjtBQUNIOztBQUNELElBQUEsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFELENBQWY7QUFDQSxJQUFBLE9BQU8sQ0FBQyxTQUFSLENBQWtCLEdBQWxCLENBQXNCLFNBQXRCO0FBQ0g7O0FBQ0QsRUFBQSxJQUFJLENBQUMsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBVSxFQUFWLEVBQWM7QUFDekMsSUFBQSxRQUFRLENBQUMsQ0FBRCxDQUFSO0FBQ0gsR0FGRDtBQUdBLEVBQUEsSUFBSSxDQUFDLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFVBQVUsRUFBVixFQUFjO0FBQ3pDLElBQUEsUUFBUSxDQUFDLENBQUMsQ0FBRixDQUFSO0FBQ0gsR0FGRDtBQUdBLEVBQUEsUUFBUSxDQUFDLENBQUQsQ0FBUjtBQUNILENBbkNVLEVBQVgiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBoZWxsbyA9ICdIaSBXb3JsZCc7XG5jb25zb2xlLmxvZyhoZWxsbyk7XG5cbmNhcm91c2VsID0gKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsYm94Jyk7XG4gICAgbGV0IG5leHQgPSBib3gucXVlcnlTZWxlY3RvcignLm5leHQnKTtcbiAgICBsZXQgcHJldiA9IGJveC5xdWVyeVNlbGVjdG9yKCcucHJldicpO1xuICAgIGxldCBpdGVtcyA9IGJveC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGVudCBsaScpO1xuICAgIGxldCBjb3VudGVyID0gMDtcbiAgICBsZXQgYW1vdW50ID0gaXRlbXMubGVuZ3RoO1xuICAgIGxldCBjdXJyZW50ID0gaXRlbXNbMF07XG4gICAgYm94LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIGNvbnNvbGUubG9nKCdhY3RpdmUgYWRkZWQgdG8gYm94Jyk7XG5cbiAgICBmdW5jdGlvbiBuYXZpZ2F0ZShkaXJlY3Rpb24pIHtcbiAgICAgICAgY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjdXJyZW50IHJlbW92ZWQgZnJvbSBsaScpO1xuXG4gICAgICAgIGNvdW50ZXIgPSBjb3VudGVyICsgZGlyZWN0aW9uO1xuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IC0xICYmXG4gICAgICAgICAgICBjb3VudGVyIDwgMCkge1xuICAgICAgICAgICAgY291bnRlciA9IGFtb3VudCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gMSAmJlxuICAgICAgICAgICAgIWl0ZW1zW2NvdW50ZXJdKSB7XG4gICAgICAgICAgICBjb3VudGVyID0gMDtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50ID0gaXRlbXNbY291bnRlcl07XG4gICAgICAgIGN1cnJlbnQuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuICAgIH1cbiAgICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIG5hdmlnYXRlKDEpO1xuICAgIH0pO1xuICAgIHByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgbmF2aWdhdGUoLTEpO1xuICAgIH0pO1xuICAgIG5hdmlnYXRlKDApO1xufSkoKTsiXX0=
