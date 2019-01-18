(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var hello = 'Hi World';
console.log(hello);
$(function () {
  $('.carousel1-pic').click(function () {
    $('.carousel1-text').fadeIn('.hide');
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sS0FBSyxHQUFHLFVBQWQ7QUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLEtBQVo7QUFHQSxDQUFDLENBQUMsWUFBWTtBQUNWLEVBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0IsS0FBcEIsQ0FBMEIsWUFBWTtBQUNsQyxJQUFBLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCLE1BQXJCLENBQTRCLE9BQTVCO0FBQ0gsR0FGRDtBQUdBLEVBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0IsS0FBcEIsQ0FBMEIsWUFBWTtBQUNsQyxJQUFBLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCLE9BQXJCLENBQTZCLE9BQTdCO0FBQ0EsSUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQixNQUFyQixDQUE0QixPQUE1QjtBQUNILEdBSEQ7QUFJQSxFQUFBLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CLEtBQXBCLENBQTBCLFlBQVk7QUFDbEMsSUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQixPQUFyQixDQUE2QixPQUE3QjtBQUNBLElBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUIsTUFBckIsQ0FBNEIsT0FBNUI7QUFDSCxHQUhEO0FBSUEsRUFBQSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQixLQUFwQixDQUEwQixZQUFZO0FBQ2xDLElBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUIsT0FBckIsQ0FBNkIsT0FBN0I7QUFDQSxJQUFBLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCLE1BQXJCLENBQTRCLE9BQTVCO0FBQ0gsR0FIRDtBQUlILENBaEJBLENBQUQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBoZWxsbyA9ICdIaSBXb3JsZCc7XG5jb25zb2xlLmxvZyhoZWxsbyk7XG5cblxuJChmdW5jdGlvbiAoKSB7XG4gICAgJCgnLmNhcm91c2VsMS1waWMnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5jYXJvdXNlbDEtdGV4dCcpLmZhZGVJbignLmhpZGUnKTtcbiAgICB9KTtcbiAgICAkKCcuY2Fyb3VzZWwyLXBpYycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmNhcm91c2VsMS10ZXh0JykuZmFkZU91dCgnLmhpZGUnKTtcbiAgICAgICAgJCgnLmNhcm91c2VsMi10ZXh0JykuZmFkZUluKCcuaGlkZScpO1xuICAgIH0pO1xuICAgICQoJy5jYXJvdXNlbDMtcGljJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuY2Fyb3VzZWwyLXRleHQnKS5mYWRlT3V0KCcuaGlkZScpO1xuICAgICAgICAkKCcuY2Fyb3VzZWwzLXRleHQnKS5mYWRlSW4oJy5oaWRlJyk7XG4gICAgfSk7XG4gICAgJCgnLmNhcm91c2VsNC1waWMnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5jYXJvdXNlbDMtdGV4dCcpLmZhZGVPdXQoJy5oaWRlJyk7XG4gICAgICAgICQoJy5jYXJvdXNlbDQtdGV4dCcpLmZhZGVJbignLmhpZGUnKTtcbiAgICB9KTtcbn0pOyJdfQ==
