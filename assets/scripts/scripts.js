
import { rating } from "./rating.js";
import { formRegistration } from "./form-registration.js";
import { sliders } from "./sliders.js";


$(document).ready(function () {
  rating.init();
  formRegistration.init();
  sliders.tariffSlider();
});

