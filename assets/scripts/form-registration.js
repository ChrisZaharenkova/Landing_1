export var formRegistration = {
  formElem: $("#registration_form"),
  inputSuccessClass: "form__input--success",
  inputErrorClass: "form__input--error",
  passwordElem: $("#registration_form input[name='password']"),
  passwordReElem: $("#registration_form input[name='password-re']"),
  submitElem: $("#registration_form a.submit"),
  init() {
    this.addEvents();
  },
  addEvents() {
    this.submitElem.on("click", (e) => {
      e.preventDefault();
      this.validate();
    });

    this.passwordElem.on("keyup", () => { this.validateReset() });
    this.passwordReElem.on("keyup", () => { this.validateReset() });
  },
  validate() {
      var passwordValue = this.passwordElem.val();
      var passwordReValue = this.passwordReElem.val();
      
      if (passwordValue && passwordValue == passwordReValue) {
        this.validateSuccess();
      } else {
        this.validateError();
      }
  },
  validateSuccess() {
    this.passwordElem.addClass(this.inputSuccessClass);
    this.passwordReElem.addClass(this.inputSuccessClass);
  },
  validateError() {
    this.passwordElem.addClass(this.inputErrorClass);
    this.passwordReElem.addClass(this.inputErrorClass);
  },
  validateReset() {
    this.passwordElem.removeClass(this.inputErrorClass + ' ' + this.inputSuccessClass);
    this.passwordReElem.removeClass(this.inputErrorClass + ' ' + this.inputSuccessClass);
  }
};
