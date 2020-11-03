export class FormValidator {
  constructor(form, error) {
    this.form = form;
    this.error = error;
    this.errorElements = document.querySelector(".error");
  }

  isValidate(input) {
    input.setCustomValidity("");
    if (input.validity.valueMissing) {
      input.setCustomValidity("Нужно ввести ключевое слово");
      return false;
    }
    return input.checkValidity();
  }

  validFieldInput(input) {
    this.error = input.closest(".search__field").querySelector(".error");
    this.isValidate(input);
    this.error.textContent = input.validationMessage;
  }

  setSubmitButtonState(button, state) {
    if (state) {
      button.removeAttribute("disabled");
      button.classList.add("button_valid");
      button.classList.remove("button_invalid");
    } else {
      button.setAttribute("disabled", true);
      button.classList.add("button_invalid");
      button.classList.remove("button_valid");
    }
  }

  handlerInputForm(evt) {
    const currentForm = evt.currentTarget;

    const submit = currentForm.querySelector(".button");

    this.validFieldInput(evt.target);

    if (currentForm.checkValidity()) {
      this.setSubmitButtonState(submit, true);
    } else {
      this.setSubmitButtonState(submit, false);
    }
  }

  sendForm(evt) {
    evt.preventDefault();
    const currentForm = evt.target;
    currentForm.checkValidity();
  }

  setListeners() {
    this.form.addEventListener("input", (e) => this.sendForm(e));
    this.form.addEventListener("input", (e) => this.handlerInputForm(e));
  }

 deletErr() {
    this.errorElements.forEach(function (elem) {
      elem.textContent = "";
    });
  }
}
