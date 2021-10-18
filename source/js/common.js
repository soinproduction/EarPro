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
      prevArrow: $(".main-slide__l"),
      nextArrow: $(".main-slide__r"),
      dotsClass: 'main-slider__dots',
      responsive: [
        {
          breakpoint: 992,
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
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            centerPadding: '0',
          }
        },

        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            centerPadding: '0',
          }
        },

        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
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
      prevArrow: $(".last-slide__l"),
      nextArrow: $(".last-slide__r"),
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            edgeFriction: 0.5,
            centerPadding: '0',
            centerMode: false,
            variableWidth: true,
            arrows: false,
          }
        },

        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            edgeFriction: 0.5,
            arrows: false,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            edgeFriction: 0.5,
            centerPadding: '0',
            variableWidth:false,
          }
        },

        {
          breakpoint: 1441,
          settings: {
            slidesToShow: 4,
            edgeFriction: 0.5,
            centerPadding: '0',
            variableWidth:false,
          }
        },


        {
          breakpoint: 1601,
          settings: {
            slidesToShow: 4,
            edgeFriction: 0.5,
            centerPadding: '0',
            variableWidth:false,
          }
        },

      ]
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
      prevArrow: $(".faq-slide__l"),
      nextArrow: $(".faq-slide__r"),
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            centerPadding: '0',
            centerMode: false,
            variableWidth: true,
            adaptiveHeight: false,
          }
        },

      ]
    },
    // BREAKPOINT: 1600,
    // CLASSNAME: '',
  },

  REASON_SLIDER: {
    ELEMENT: $(".reasons-sec__list"),
    SETTINGS: {
      accessibility: true,
      arrows: true,
      dots: false,
      speed: 800,
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
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            centerPadding: '0',
            adaptiveHeight: true,
          }
        },

      ]
    },
    BREAKPOINT: 991,
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
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            centerPadding: '0',
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            initialSlide: 2,
            // centerPadding: '0',
          }
        },

        {
          breakpoint: 1201,
          settings: {
            centerPadding: '15%',
          }
        },
        {
          breakpoint: 1441,
          settings: {
            centerPadding: '15%',
          }
        },

        {
          breakpoint: 1601,
          settings: {
            centerPadding: '15%',
          }
        },

      ]
    },
    // BREAKPOINT: 1600,
    // CLASSNAME: '',
  },

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
initialazeSlickSlider(Sliders.REASON_SLIDER);


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



const items = document.querySelectorAll('.rent-box__inner');
const images = document.querySelectorAll('.rent-box__image');

images.forEach(function(image) {
  if (document.documentElement.clientWidth < 992) {
    image.classList.add('panel');
  } else {
    image.classList.remove('panel');
  }
})

items.forEach(function(item) {
  if (document.documentElement.clientWidth < 992) {
    item.classList.add('accordion');
  } else {
    item.classList.remove('accordion');
  }

})


const itemsFirst = document.querySelectorAll('.program-box__body');
const imageFirst = document.querySelectorAll('.hidden-image');

imageFirst.forEach(function(image) {
  if (document.documentElement.clientWidth < 992) {
    image.classList.add('panel');
  } else {
    image.classList.remove('panel');
  }
})

itemsFirst.forEach(function(item) {
  if (document.documentElement.clientWidth < 992) {
    item.classList.add('accordion');
  } else {
    item.classList.remove('accordion');
  }

})


// ----------------- Аккордион --------------------
/**
 * Классы для аккордиона
 */
 const accordeon = {
  CLASS: 'accordion',
  CLASS_ACTIVE: 'active',
}

/**
 * acc - неизменная переменная для работы с аккордионом
 */
const acc = document.querySelectorAll(`.${accordeon.CLASS}`);
let openedAccordeon = null;

/**
 * использует nextElementSibling для открытия или закрытия аккордиона
 */
function closeAccordeon(acc) {
  acc.previousElementSibling.style.maxHeight = 0;
  acc.classList.remove(accordeon.CLASS_ACTIVE);
}


function openAccordeon(acc) {
  acc.previousElementSibling.style.maxHeight = `${acc.previousElementSibling.scrollHeight}px`;
  acc.classList.add(accordeon.CLASS_ACTIVE);
}

/**
 * Проверка на открытие аккордиона !nextElementSibling!
 */
function isAccordeonOpen(acc) {
  acc.previousElementSibling && !acc.previousElementSibling.style.maxHeight
}

/**
 * Итерация, реализация переключения открытого аккордиона
 *
 */



for (const accordeon of acc) {
  accordeon.addEventListener("click", function () {
    const currentAccordeon = this;

    openedAccordeon && closeAccordeon(openedAccordeon);

    if (isAccordeonOpen(currentAccordeon)) {
      closeAccordeon(currentAccordeon);
    } else {
      openAccordeon(currentAccordeon);
      openedAccordeon = currentAccordeon;
    }
  });
};

// --------------





if (document.documentElement.clientWidth > 768) {
  AOS.init();
}


var h = document.querySelector(".hard-box");
var s = document.querySelector(".absolite-box__blur");

if (document.documentElement.clientWidth < 992) {
  h.insertAdjacentElement("beforeend", s);
}

$('.burger-menu').click(function(){
  $(this).toggleClass('active');
  $('.mobile-menu').toggleClass('active');
  $('body').toggleClass('fixed');
});


$('[data-modal=offer]').on('click', function(){
  $('.overlay, #offer-modal').fadeIn('slow');
});

 $('.close-modal').on('click', function(){
  $('.overlay, .modal').fadeOut('slow');
});

jQuery(function($){
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".modal"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $('.overlay, #offer-modal').fadeOut('slow');
		}
	});
});
