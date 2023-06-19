var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

$(document)
  .unbind("keydown")
  .bind("keydown", function (event) {
    if (event.keyCode === 8) {
      var doPrevent = true;
      var types = [
        "text",
        "password",
        "file",
        "search",
        "email",
        "number",
        "date",
        "color",
        "datetime",
        "datetime-local",
        "month",
        "range",
        "search",
        "tel",
        "time",
        "url",
        "week",
      ];
      var d = $(event.srcElement || event.target);
      var disabled = d.prop("readonly") || d.prop("disabled");
      if (!disabled) {
        if (d[0].isContentEditable) {
          doPrevent = false;
        } else if (d.is("input")) {
          var type = d.attr("type");
          if (type) {
            type = type.toLowerCase();
          }
          if (types.indexOf(type) > -1) {
            doPrevent = false;
          }
        } else if (d.is("textarea")) {
          doPrevent = false;
        }
      }
      if (doPrevent) {
        event.preventDefault();
        return false;
      }
    }
  });
