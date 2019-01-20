(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var hello = 'Hi World';
console.log(hello); // function clearBox(elementID) {
//     document.getElementById(elementID).innerHTML = "";
// };

$(function () {
  $('.carousel1-pic').click(function () {
    // $('.text-container').html("");
    $('.carousel1').fadeIn('.hide');
  });
  $('.carousel2-pic').click(function () {
    $('.text-container').html("");
    $('.carousel2').fadeIn('.hide');
  });
  $('.carousel3-pic').click(function () {
    $('.text-container').html("");
    $('.carousel3').fadeIn('.hide');
  });
  $('.carousel4-pic').click(function () {
    $('.text-container').html("");
    $('.carousel4').fadeIn('.hide');
  });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sS0FBSyxHQUFHLFVBQWQ7QUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLEtBQVosRSxDQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLENBQUMsWUFBWTtBQUNWLEVBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0IsS0FBcEIsQ0FBMEIsWUFBWTtBQUNsQztBQUNBLElBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQixNQUFoQixDQUF1QixPQUF2QjtBQUNILEdBSEQ7QUFJQSxFQUFBLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CLEtBQXBCLENBQTBCLFlBQVk7QUFDbEMsSUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQixJQUFyQixDQUEwQixFQUExQjtBQUNBLElBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQixNQUFoQixDQUF1QixPQUF2QjtBQUNILEdBSEQ7QUFJQSxFQUFBLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CLEtBQXBCLENBQTBCLFlBQVk7QUFDbEMsSUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQixJQUFyQixDQUEwQixFQUExQjtBQUNBLElBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQixNQUFoQixDQUF1QixPQUF2QjtBQUNILEdBSEQ7QUFJQSxFQUFBLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CLEtBQXBCLENBQTBCLFlBQVk7QUFDbEMsSUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQixJQUFyQixDQUEwQixFQUExQjtBQUNBLElBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQixNQUFoQixDQUF1QixPQUF2QjtBQUNILEdBSEQ7QUFJSCxDQWpCQSxDQUFEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgaGVsbG8gPSAnSGkgV29ybGQnO1xuY29uc29sZS5sb2coaGVsbG8pO1xuXG4vLyBmdW5jdGlvbiBjbGVhckJveChlbGVtZW50SUQpIHtcbi8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SUQpLmlubmVySFRNTCA9IFwiXCI7XG4vLyB9O1xuXG4kKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuY2Fyb3VzZWwxLXBpYycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gJCgnLnRleHQtY29udGFpbmVyJykuaHRtbChcIlwiKTtcbiAgICAgICAgJCgnLmNhcm91c2VsMScpLmZhZGVJbignLmhpZGUnKTtcbiAgICB9KTtcbiAgICAkKCcuY2Fyb3VzZWwyLXBpYycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLnRleHQtY29udGFpbmVyJykuaHRtbChcIlwiKTtcbiAgICAgICAgJCgnLmNhcm91c2VsMicpLmZhZGVJbignLmhpZGUnKTtcbiAgICB9KTtcbiAgICAkKCcuY2Fyb3VzZWwzLXBpYycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLnRleHQtY29udGFpbmVyJykuaHRtbChcIlwiKTtcbiAgICAgICAgJCgnLmNhcm91c2VsMycpLmZhZGVJbignLmhpZGUnKTtcbiAgICB9KTtcbiAgICAkKCcuY2Fyb3VzZWw0LXBpYycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLnRleHQtY29udGFpbmVyJykuaHRtbChcIlwiKTtcbiAgICAgICAgJCgnLmNhcm91c2VsNCcpLmZhZGVJbignLmhpZGUnKTtcbiAgICB9KTtcbn0pOyJdfQ==
