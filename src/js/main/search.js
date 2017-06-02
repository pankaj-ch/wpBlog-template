$(document).ready(function () {
  'use strict';
  $('.search .ion-close-round').click(function (e) {
    $('.search').removeClass('active');
    e.stopPropagation();
  });
  $('.search').click(function () {
    $('.search').addClass('active');
  });
});