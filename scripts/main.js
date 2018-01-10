'use strict';

AOS.init();
$(document).ready(function(){
  $('.slick').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-next"><img src="images/next.png"></button>',
    prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.png"></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});