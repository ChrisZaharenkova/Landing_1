export var dropdownList = {
    listItemElem: $(".dropdown-list__item"),
    listActiveClass: "dropdown-list__item--active",
    init() {
        console.log(222)
        this.listItemElem.on("click", (e) => {
            var $listItem = $(e.currentTarget);
            $listItem.toggleClass(this.listActiveClass);
          });
    }
  };
  