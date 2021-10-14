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
      // autoplay: true,
      // autoplaySpeed: 6000,
      prevArrow: $(".main-slide__l"),
      nextArrow: $(".main-slide__r"),
      dotsClass: 'main-slider__dots',
      responsive: [
        {
          breakpoint: 576,
          settings: {
            dots: false,
          }
        },

      ]
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
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            centerPadding: '0',
          }
        },

      ]
    },
    // BREAKPOINT: 1600,
    // CLASSNAME: '',
  },

  LAST_SLIDER: {
    ELEMENT: $(".last-slider"),
    SETTINGS: {
      accessibility: true,
      arrows: true,
      dots: false,
      speed: 1500,
      variableWidth: true,
      slidesToShow: 3,
      centerMode: true,
      infinite: true,
      centerPadding: '200px',
      // autoplay: true,
      // autoplaySpeed: 6000,
      prevArrow: $(".last-slide__l"),
      nextArrow: $(".last-slide__r"),
    },
    // BREAKPOINT: 1600,
    // CLASSNAME: '',
  },

  FAQ_SLIDER: {
    ELEMENT: $(".faq-slider"),
    SETTINGS: {
      accessibility: true,
      arrows: true,
      dots: false,
      speed: 1500,
      adaptiveHeight:true,
      focusOnSelect: true,
      variableWidth: true,
      slidesToShow: 3,
      infinite: false,
      centerMode: true,
      // centerPadding: '200px',
      // autoplay: true,
      // autoplaySpeed: 6000,
      // prevArrow: $(".last-slide__l"),
      // nextArrow: $(".last-slide__r"),
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
      infinite: false,
      centerPadding: '23.5vw',
      centerMode: true,
      // autoplay: true,
      // autoplaySpeed: 6000,
      prevArrow: $(".big-slider__l"),
      nextArrow: $(".big-slider__r"),
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
initialazeSlickSlider(Sliders.LAST_SLIDER);
initialazeSlickSlider(Sliders.NAV_SLIDER);
initialazeSlickSlider(Sliders.FAQ_SLIDER);


// function openCity(evt, cityName) {
//   // Объявить все переменные
//   var i, tabcontent, tablinks;

//   // Получить все элементы с class="tabcontent" и скрыть их
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }

//   // Получить все элементы с class="tablinks" и снять класс "active"
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }

//   // Показать на текущей вкладке, и добавить класс "active" по ссылке, которая откроется вкладка
//   document.getElementById(cityName).style.display = "block";
//   evt.currentTarget.className += " active";
// }


$('.program-box__item').hover(function(){
  $(this).addClass("active");
  $(".program-box__item").not(this).removeClass("active");
});



$(".tab").click(function (event) {
  $(".tab-content").removeClass("active");
  $(".tab").removeClass("active");
  $(".tab-image").removeClass("active");
  $(this).addClass("active");

  const tabId = $(this).data("tab");

  $($(`#tab${tabId}`)).addClass("active").find('.tab-image').toggleClass('active');

  // let inner = $(`#tab${tabId}`);
  // inner.find('.tab-image').toggleClass('worked')


});



AOS.init();
