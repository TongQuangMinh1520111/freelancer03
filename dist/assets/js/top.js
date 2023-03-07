$(document).ready(function () {
  "use strict";
  $(".mainv-slider").slick({
    slidesToShow: 1,
    infinite: true,
    dots: true,
    arrows: false,
    touchMove: true,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
  });

  $(".person-slider").slick({
    slidesToShow: 1,
    infinite: true,
    dots: true,
    arrows: false,
    touchMove: true,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
  });
  $(".slider01").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: true,
    touchMove: true,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
  $(".slider02").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: true,
    touchMove: true,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  
  if ($('.m-blockfqa').length) {
    $('.m-blockfqa dl').each(function(index){
        $(this).find('dt').click(function(){
            $(this).toggleClass('active');
            $('.m-blockfqa dl dd').eq(index).slideToggle();
        })
    })
  }
  
});
