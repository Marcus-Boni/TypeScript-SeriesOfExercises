/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/webpack/index.ts ***!
  \******************************/

var centimeter = document.querySelector('#centimeter');
var inches = document.querySelector('#inches');
centimeter.addEventListener('input', function (e) {
    var target = e.currentTarget;
    var calcCentimeters = calcCentimeterToInches(Number(target.value));
    inches.value = calcCentimeters.toString();
});
inches.addEventListener('input', function (e) {
    var target = e.currentTarget;
    var calcInches = calcInchesToCentimeters(Number(target.value));
    centimeter.value = calcInches.toString();
});
var calcInchesToCentimeters = function (value) {
    return value * 2.54;
};
var calcCentimeterToInches = function (value) {
    return value * 0.393700787;
};

/******/ })()
;
//# sourceMappingURL=bundle.js.map