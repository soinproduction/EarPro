 // -----------------  Слайдера --------------------

 const Sliders = {
  MAIN_SLIDER: {
    ELEMENT: $(".main-slider"),
    SETTINGS: {
      accessibility: true,
      arrows: true,
      dots: true,
      speed: 1500,
      slidesToShow: 1,
      // infinite: true,
      autoplay: true,
      autoplaySpeed: 6000,
      prevArrow: $(".main-slide__l"),
      nextArrow: $(".main-slide__r"),
      dotsClass: 'main-slider__dots',
    },
    // BREAKPOINT: 1600,
    // CLASSNAME: '',
  },
  GALERY_SLIDER: {
    ELEMENT: $(".third-slider"),
    SETTINGS: {
      accessibility: true,
      arrows: true,
      dots: false,
      speed: 1500,
      // variableWidth: true,
      slidesToShow: 3,
      centerMode: true,
      infinite: true,
      centerPadding: '200px',
      // autoplay: true,
      // autoplaySpeed: 6000,
      prevArrow: $(".third-slide__l"),
      nextArrow: $(".third-slide__r"),
    },
    // BREAKPOINT: 1600,
    // CLASSNAME: '',
  },

  BIG_SLIDER: {
    ELEMENT: $(".big-slider"),
    SETTINGS: {
      accessibility: true,
      arrows: true,
      dots: false,
      speed: 1500,
      asNavFor: ".nav-slider",
      // asNavFor: ".absolute-slider, .nav-slider",
      // variableWidth: true,
      slidesToShow: 1,
      infinite: true,
      centerPadding: '23.5vw',
      centerMode: true,
      // autoplay: true,
      // autoplaySpeed: 6000,
      // prevArrow: $(".third-slide__l"),
      // nextArrow: $(".third-slide__r"),
    },
    // BREAKPOINT: 1600,
    // CLASSNAME: '',
  },

  // ABSOLUTE_SLIDER: {
  //   ELEMENT: $(".absolute-slider"),
  //   SETTINGS: {
  //     accessibility: true,
  //     arrows: false,
  //     dots: false,
  //     speed: 1500,
  //     // variableWidth: true,
  //     slidesToShow: 1,
  //     infinite: true,
  //     asNavFor: ".big-slider, .nav-slider",
  //     // autoplay: true,
  //     // autoplaySpeed: 6000,
  //     // prevArrow: $(".third-slide__l"),
  //     // nextArrow: $(".third-slide__r"),
  //   },
  //   // BREAKPOINT: 1600,
  //   // CLASSNAME: '',
  // },

  NAV_SLIDER: {
    ELEMENT: $(".nav-slider"),
    SETTINGS: {
      accessibility: true,
      arrows: false,
      dots: false,
      speed: 1500,
      slidesToShow: 7,
      infinite: true,
      asNavFor: ".big-slider",
      centerMode: true,
      centerPadding: '0px',
      focusOnSelect: true,
      // autoplay: true,
      // autoplaySpeed: 6000,
      // prevArrow: $(".third-slide__l"),
      // nextArrow: $(".third-slide__r"),
    },
    // BREAKPOINT: 1600,
    // CLASSNAME: '',
  },

};

function initialazeSlickSlider(slider) {
  const { BREAKPOINT, SETTINGS, ELEMENT } = slider;
  (document.documentElement.clientWidth <= BREAKPOINT ||
    BREAKPOINT === undefined) &&
    ELEMENT.slick(SETTINGS);
}

function toggleSlider(slider) {
  const { BREAKPOINT, ELEMENT, SETTINGS } = slider;
  document.documentElement.clientWidth > BREAKPOINT &&
    ELEMENT.hasClass("slick-initialized") &&
    ELEMENT.slick("unslick");
  document.documentElement.clientWidth <= BREAKPOINT &&
    !ELEMENT.hasClass("slick-initialized") &&
    ELEMENT.slick(SETTINGS);
}

function toggleExtraClass(slider) {
  const { BREAKPOINT, ELEMENT, CLASSNAME } = slider;
  document.documentElement.clientWidth > BREAKPOINT &&
    !ELEMENT.hasClass(CLASSNAME) &&
    ELEMENT.addClass(CLASSNAME);
  document.documentElement.clientWidth <= BREAKPOINT &&
    ELEMENT.hasClass(CLASSNAME) &&
    ELEMENT.removeClass(CLASSNAME);
}

initialazeSlickSlider(Sliders.MAIN_SLIDER);
initialazeSlickSlider(Sliders.GALERY_SLIDER);
initialazeSlickSlider(Sliders.BIG_SLIDER);
// initialazeSlickSlider(Sliders.ABSOLUTE_SLIDER);
initialazeSlickSlider(Sliders.NAV_SLIDER);





// $('.big-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
//   $('.big-slider__slide.slick-current' ).css('opacity', '0');
// });
