'use strict';

AOS.init();
$(document).ready(function(){
  $('.slick').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1
  });
});