export var rating = {
  hoverClass: "rating__item--hover",
  selectClass: "rating__item--select",
  init() {
    this.hover();
    this.set();
  },
  set() {
    $("#rating .rating__item").on("click", (e) => {
      var $ratingElem = $(e.currentTarget);
      var starNumberHover = $ratingElem.data("number");
      var selectClass = this.selectClass;
      $ratingElem
        .parent()
        .find(".rating__item")
        .each(function (e) {
          if (e + 1 <= starNumberHover) {
            $(this).addClass(selectClass);
          }
        });
    });
  },
  hover() {
    var hoverClass = this.hoverClass;
    $("#rating .rating__item")
      .on("mouseover", (e) => {
        var $ratingElem = $(e.currentTarget);
        var starNumberHover = $ratingElem.data("number");

        $ratingElem
          .parent()
          .find(".rating__item")
          .each(function (e) {
            if (e + 1 <= starNumberHover) {
              $(this).addClass(hoverClass);
            } else {
              $(this).removeClass(hoverClass);
            }
          });
      })
      .on("mouseout", (e) => {
        $(e.currentTarget)
          .parent()
          .find(".rating__item")
          .each(function (e) {
            $(this).removeClass(hoverClass);
          });
      });
  },
};
