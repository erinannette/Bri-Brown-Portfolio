(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var hello = 'Hi World';
console.log(hello);
$(function () {
  $('.stage--button').click(function () {
    $('.stage--button').add('.active'); // $('.screen--button').remove('.active');
    // $('.in-dev--button').remove('.active');

    $('.screen--section').hide();
    $('.in-dev--section').hide();
    $('.stage--section').show();
  });
  $('.screen--button').click(function () {
    $('.screen--button').add('.active'); // $('.stage--button').remove('.active');
    // $('.in-dev--button').remove('.active');

    $('.stage--section').hide();
    $('.in-dev--section').hide();
    $('.screen--section').show();
  });
  $('.in-dev--button').click(function () {
    $('.in-dev--button').add('.active'); // $('.stage--button').remove('.active');
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sS0FBSyxHQUFHLFVBQWQ7QUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLEtBQVo7QUFFQSxDQUFDLENBQUMsWUFBWTtBQUNWLEVBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0IsS0FBcEIsQ0FBMEIsWUFBWTtBQUNsQyxJQUFBLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CLEdBQXBCLENBQXdCLFNBQXhCLEVBRGtDLENBRWxDO0FBQ0E7O0FBRUEsSUFBQSxDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQixJQUF0QjtBQUNBLElBQUEsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0IsSUFBdEI7QUFFQSxJQUFBLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCLElBQXJCO0FBQ0gsR0FURDtBQVVBLEVBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUIsS0FBckIsQ0FBMkIsWUFBWTtBQUNuQyxJQUFBLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCLEdBQXJCLENBQXlCLFNBQXpCLEVBRG1DLENBRW5DO0FBQ0E7O0FBRUEsSUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQixJQUFyQjtBQUNBLElBQUEsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0IsSUFBdEI7QUFFQSxJQUFBLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCLElBQXRCO0FBQ0gsR0FURDtBQVVBLEVBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUIsS0FBckIsQ0FBMkIsWUFBWTtBQUNuQyxJQUFBLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCLEdBQXJCLENBQXlCLFNBQXpCLEVBRG1DLENBRW5DO0FBQ0E7O0FBRUEsSUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQixJQUFyQjtBQUNBLElBQUEsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0IsSUFBdEI7QUFFQSxJQUFBLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCLElBQXRCO0FBQ0gsR0FURDtBQVVILENBL0JBLENBQUQ7QUFtQ0EsQ0FBQyxDQUFDLFlBQVk7QUFDVixFQUFBLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUIsS0FBakIsQ0FBdUIsWUFBWTtBQUMvQixJQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYSxJQUFiO0FBQ0EsSUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWEsSUFBYjtBQUNBLElBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhLElBQWI7QUFDQSxJQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYSxJQUFiO0FBRUEsSUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWEsSUFBYjtBQUNILEdBUEQ7QUFRQSxFQUFBLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUIsS0FBakIsQ0FBdUIsWUFBWTtBQUMvQixJQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYSxJQUFiO0FBQ0EsSUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWEsSUFBYjtBQUNBLElBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhLElBQWI7QUFDQSxJQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYSxJQUFiO0FBRUEsSUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWEsSUFBYjtBQUNILEdBUEQ7QUFRQSxFQUFBLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUIsS0FBakIsQ0FBdUIsWUFBWTtBQUMvQixJQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYSxJQUFiO0FBQ0EsSUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWEsSUFBYjtBQUNBLElBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhLElBQWI7QUFDQSxJQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYSxJQUFiO0FBRUEsSUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWEsSUFBYjtBQUNILEdBUEQ7QUFRQSxFQUFBLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUIsS0FBakIsQ0FBdUIsWUFBWTtBQUMvQixJQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYSxJQUFiO0FBQ0EsSUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWEsSUFBYjtBQUNBLElBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhLElBQWI7QUFDQSxJQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYSxJQUFiO0FBRUEsSUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWEsSUFBYjtBQUNILEdBUEQ7QUFRSCxDQWpDQSxDQUFEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgaGVsbG8gPSAnSGkgV29ybGQnO1xuY29uc29sZS5sb2coaGVsbG8pO1xuXG4kKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuc3RhZ2UtLWJ1dHRvbicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLnN0YWdlLS1idXR0b24nKS5hZGQoJy5hY3RpdmUnKTtcbiAgICAgICAgLy8gJCgnLnNjcmVlbi0tYnV0dG9uJykucmVtb3ZlKCcuYWN0aXZlJyk7XG4gICAgICAgIC8vICQoJy5pbi1kZXYtLWJ1dHRvbicpLnJlbW92ZSgnLmFjdGl2ZScpO1xuXG4gICAgICAgICQoJy5zY3JlZW4tLXNlY3Rpb24nKS5oaWRlKCk7XG4gICAgICAgICQoJy5pbi1kZXYtLXNlY3Rpb24nKS5oaWRlKCk7XG5cbiAgICAgICAgJCgnLnN0YWdlLS1zZWN0aW9uJykuc2hvdygpO1xuICAgIH0pO1xuICAgICQoJy5zY3JlZW4tLWJ1dHRvbicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLnNjcmVlbi0tYnV0dG9uJykuYWRkKCcuYWN0aXZlJyk7XG4gICAgICAgIC8vICQoJy5zdGFnZS0tYnV0dG9uJykucmVtb3ZlKCcuYWN0aXZlJyk7XG4gICAgICAgIC8vICQoJy5pbi1kZXYtLWJ1dHRvbicpLnJlbW92ZSgnLmFjdGl2ZScpO1xuXG4gICAgICAgICQoJy5zdGFnZS0tc2VjdGlvbicpLmhpZGUoKTtcbiAgICAgICAgJCgnLmluLWRldi0tc2VjdGlvbicpLmhpZGUoKTtcblxuICAgICAgICAkKCcuc2NyZWVuLS1zZWN0aW9uJykuc2hvdygpO1xuICAgIH0pO1xuICAgICQoJy5pbi1kZXYtLWJ1dHRvbicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmluLWRldi0tYnV0dG9uJykuYWRkKCcuYWN0aXZlJyk7XG4gICAgICAgIC8vICQoJy5zdGFnZS0tYnV0dG9uJykucmVtb3ZlKCcuYWN0aXZlJyk7XG4gICAgICAgIC8vICQoJy5zY3JlZW4tLWJ1dHRvbicpLnJlbW92ZSgnLmFjdGl2ZScpO1xuXG4gICAgICAgICQoJy5zdGFnZS0tc2VjdGlvbicpLmhpZGUoKTtcbiAgICAgICAgJCgnLnNjcmVlbi0tc2VjdGlvbicpLmhpZGUoKTtcblxuICAgICAgICAkKCcuaW4tZGV2LS1zZWN0aW9uJykuc2hvdygpO1xuICAgIH0pO1xufSk7XG5cblxuXG4kKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuc3RhZ2UxLXBpYycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLnN0YWdlMCcpLmhpZGUoKTtcbiAgICAgICAgJCgnLnN0YWdlMicpLmhpZGUoKTtcbiAgICAgICAgJCgnLnN0YWdlMycpLmhpZGUoKTtcbiAgICAgICAgJCgnLnN0YWdlNCcpLmhpZGUoKTtcblxuICAgICAgICAkKCcuc3RhZ2UxJykuc2hvdygpO1xuICAgIH0pO1xuICAgICQoJy5zdGFnZTItcGljJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuc3RhZ2UwJykuaGlkZSgpO1xuICAgICAgICAkKCcuc3RhZ2UxJykuaGlkZSgpO1xuICAgICAgICAkKCcuc3RhZ2UzJykuaGlkZSgpO1xuICAgICAgICAkKCcuc3RhZ2U0JykuaGlkZSgpO1xuXG4gICAgICAgICQoJy5zdGFnZTInKS5zaG93KCk7XG4gICAgfSk7XG4gICAgJCgnLnN0YWdlMy1waWMnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5zdGFnZTAnKS5oaWRlKCk7XG4gICAgICAgICQoJy5zdGFnZTEnKS5oaWRlKCk7XG4gICAgICAgICQoJy5zdGFnZTInKS5oaWRlKCk7XG4gICAgICAgICQoJy5zdGFnZTQnKS5oaWRlKCk7XG5cbiAgICAgICAgJCgnLnN0YWdlMycpLnNob3coKTtcbiAgICB9KTtcbiAgICAkKCcuc3RhZ2U0LXBpYycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLnN0YWdlMCcpLmhpZGUoKTtcbiAgICAgICAgJCgnLnN0YWdlMScpLmhpZGUoKTtcbiAgICAgICAgJCgnLnN0YWdlMicpLmhpZGUoKTtcbiAgICAgICAgJCgnLnN0YWdlMycpLmhpZGUoKTtcblxuICAgICAgICAkKCcuc3RhZ2U0Jykuc2hvdygpO1xuICAgIH0pO1xufSk7Il19
