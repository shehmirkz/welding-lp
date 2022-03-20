// Mobile Only Slider
  mobileOnlySlider(".folio", false, false, true, 479);
  function mobileOnlySlider($slidername, $dots, $arrows, $autoplay, $breakpoint) {
    var slider = $($slidername);
    var settings = {
      mobileFirst: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      prevArrow: false,
      nextArrow: false,
      autoplay: $autoplay,
      centerMode: true,
      responsive: [
        {
          breakpoint: $breakpoint,
          settings: "unslick"
        } 
      ]
    };
    slider.slick(settings);
    $(window).on("resize", function () {
      if ($(window).width() > $breakpoint) {
        return;
      }
      if (!slider.hasClass("slick-initialized")) {
        return slider.slick(settings);
      }
    });
  };

// Global Slider
  $(".global-row").slick({
    dots: false,
    infinite: true,
    speed: 300,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
          dots: true
        }
      }
    ]
  });
